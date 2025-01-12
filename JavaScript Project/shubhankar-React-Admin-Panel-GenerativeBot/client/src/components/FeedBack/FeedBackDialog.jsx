import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { useState } from "react"
import { Bounce, Slide, toast } from "react-toastify"

export function FeedBackDialog({ query, response, handleDelete }) {

    const [updatedResponse, setUpdatedResponse] = useState(response)

    const handleClick = async () => {
        try {
            const resp = await axios.post(import.meta.env.VITE_SUBMIT, {
                query: query,
                response: updatedResponse
            });
            console.log(resp.data);
            console.log("deletion");

            toast.success('Item saved successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            await handleDelete();

        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Change Response</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Change Response</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="bg-muted/20 p-4 rounded-md">
                        <p className='font-semibold'>Query:</p>
                        <p className="whitespace-normal break-words">{query}</p>
                    </div>
                    <div className="bg-muted/20 p-4 rounded-md overflow-auto">
                        <p className='font-semibold'>Bot Response:</p>
                        <p className="whitespace-normal break-words">
                            {updatedResponse}
                        </p>
                    </div>
                    <Input
                        as="textarea"
                        rows="4"
                        placeholder="Enter your response..."
                        onChange={(e) => setUpdatedResponse(e.target.value)}
                        value={updatedResponse}
                        className="resize-none w-full"
                    />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" className="bg-black" onClick={handleClick}>
                            Save
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
