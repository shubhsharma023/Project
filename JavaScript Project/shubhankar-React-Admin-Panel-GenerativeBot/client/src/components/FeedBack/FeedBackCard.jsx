import React from 'react'
import { Button } from '../ui/button'
import { ChevronRightIcon } from 'lucide-react'
import { Card } from '../ui/card'
import { FeedBackDialog } from './FeedBackDialog'
import { Badge } from '../ui/badge'
import axios from 'axios'
import { Slide, toast } from 'react-toastify'

const FeedBackCard = ({ feedback, getFeedBack }) => {


    // console.log(feedback)

    const query = feedback.query
    const response = feedback.response

    const handleDelete = async () => {
        try {
            const resp = await axios.delete(import.meta.env.VITE_FEEDBACK + `/delete/${feedback._id}`);
            console.log("deleted", resp.data);

            toast.success('Item deleted successfully!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });

            getFeedBack();
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Card as="a" href="#" className="flex flex-col gap-4 p-4 hover:bg-muted transition-colors">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <h3 className="font-semibold">User</h3>
                    <p className="text-muted-foreground text-sm">Asked by John Doe on 2023-04-15</p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className={"bg-yellow-500 text-white"}>Pending</Badge>
                    <Button size="icon" variant="ghost">
                        <ChevronRightIcon className="w-5 h-5" />
                    </Button>
                </div>
            </div>
            <div className="grid gap-4">
                <div className="bg-muted/20 p-4 rounded-md">
                    <p className='font-semibold'>Query:</p>
                    <p>{query}</p>
                </div>
                <div className="bg-muted/20 p-4 rounded-md">
                    <p className='font-semibold'>Bot Response:</p>
                    <p>
                        {response}
                    </p>
                    <div className="flex items-center justify-end gap-2 mt-2">
                        <FeedBackDialog query={query} response={response} handleDelete={handleDelete} />
                        <Button size="sm" onClick={handleDelete}>Delete</Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default FeedBackCard