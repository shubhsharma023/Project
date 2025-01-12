import cv2
from os import listdir,rename
from os.path import isfile, join
import numpy as np
from time import sleep
def FilesInFolder(NAME):
    '''
    Returns an ARRAY containing all the files in the given Folder.

    '''
    Ufiles = [NAME+"/"+f for f in listdir(NAME) if isfile(join(NAME, f))]
        
    return Ufiles

def AddressToImages(addresses):
    '''
    Takes an ARRAY containing photo addresses and Returns an ARRAY of IMAGE objects of the same
    '''
    images = []
    for add in addresses:
        images.append(cv2.imread(add))
        
    return images



def TurnToBW(pictures):
    '''
    takes an array of IMAGE objects returns an array of IMAGE objects but it is Black And White
    '''
    grey = []
    for originalImage in pictures:
        if originalImage is not None:
            grey.append(cv2.cvtColor(originalImage, cv2.COLOR_BGR2GRAY))
    return grey

def Region(image):
    height = image.shape[0]
    polygons = np.array([[(200,height),(1100,height),(550,250)]])
    mask = np.zeros_like(image)
    cv2.fillPoly(mask,polygons,255)
    masked = cv2.bitwise_and(image,mask)
    return masked
                        
def Process(img):

    #turn to B/W
    Black = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # now apply gaussian blur
    Blur = cv2.GaussianBlur(Black,(5,5),0)
    #now apply Canny
    Canny = cv2.Canny(Blur,50,150)
    #Apply Region Of interest
    ROI = Region(Canny)


    '''
    -----------------------------------------------------------------------------------
    '''


    #cv2.imshow('Black and White',TurnToBW([Images[10]])[0])




    rho = 1  # distance resolution in pixels of the Hough grid
    theta = np.pi / 180  # angular resolution in radians of the Hough grid
    threshold = 15  # minimum number of votes (intersections in Hough grid cell)
    min_line_length = 50  # minimum number of pixels making up a line
    max_line_gap = 20  # maximum gap in pixels between connectable line segments
    line_image = np.copy(img) * 0  # creating a blank to draw lines on

    # Run Hough on edge detected image
    # Output "lines" is an array containing endpoints of detected line segments
    lines = cv2.HoughLinesP(ROI, rho, theta, threshold, np.array([]),
                        min_line_length, max_line_gap)

    for line in lines:
        for x1,y1,x2,y2 in line:
            cv2.line(line_image,(x1,y1),(x2,y2),(255,0,0),5)
    # Draw the lines on the  image
    lines_edges = cv2.addWeighted(img, 0.8, line_image, 1, 0)
    return ROI
    #cv2.imshow("frame",img)
    #cv2.imshow("frame",line_image)

def FrameCapture(vidObj):
    '''
    Takes an VIDEO object and returns an array of all FRAMES in it
    '''
  
    count = 0
  
    success = 1
    Frames = []  
    while success:
  
        success, image = vidObj.read()
  
        Frames.append(image)
  
        count += 1
    return Frames
def AddressToVideos(addresses):
    '''
    Takes an ARRAY containing Video addresses and Returns an ARRAY of VIDEO objects of the same
    '''
    Videos = []
    for add in addresses:
        Videos.append(cv2.VideoCapture(add))
        
    return Videos
#DRIVER CODE:

#Images = FrameCapture(AddressToVideos(['test2.mp4'])[0])
#result = cv2.VideoWriter('project.avi',cv2.VideoWriter_fourcc(*'DIVX'), 30, [Images[0].shape[1],Images[0].shape[0]],True)
cap = cv2.VideoCapture("test2.mp4")

while True:
  success,img = cap.read()

  cv2.imshow("Image",Process(img))
  cv2.waitKey(1)


