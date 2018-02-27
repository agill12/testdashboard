import csv
with open('data/newatlantic.csv','r') as fin,open('data/newatlantic2.csv','w') as fout:
    writer=csv.writer(fout)
    hurricanes=csv.reader(fin,delimiter=',')
    ids_found=[]
    
    # for row in hurricanes:
    #     print(row)
        
       
def getcategory(windspeed):
    if windspeed >= 157:
        return 6 
    elif windspeed >=130:
        return 5
    elif windspeed >=111:
        return 4
    elif windspeed >=96:
        return 3
    elif windspeed >=74:
        return 2
    elif windspeed >=39:
        return 1
    else:
        return 0
for row in hurricanes:
    print(getcategory(row[9]))
   
       
       
       
       
      