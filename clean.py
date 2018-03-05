import csv
with open('data/atlantic.csv','r') as fin,open('data/newatlantic.csv','w') as fout:
    writer=csv.writer(fout)
    hurricanes=csv.reader(fin,delimiter=',')
    
def getmaxwind():
    for row in hurricanes:
        if row[0]
    
    
    
    
    
    
    
    
    for row in hurricanes:
        if row[1]!='            UNNAMED':#THIS IS HOW THE INFO IMPORTED INTO CLOUD9
            writer.writerow(row[0:9])
        
    
#HAD TO MANUALLY REPEATED HEADING AND ADD EXTRA SPACES TO UNNAMED BECAUSE OF HOW IMPORTED INTO CLOUD9           
       
#CHECK AGAINST ID TO GET MAX WIND SPEED AND APPEND MAX CATEGORY 

    
        