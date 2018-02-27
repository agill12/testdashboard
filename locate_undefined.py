import csv
with open('data/newatlantic.csv','r') as fin,open('data/undefinedrows.csv','w') as fout:
    writer=csv.writer(fout)
    hurricane=csv.reader(fin,delimiter=',')
    
    for row in hurricane:
        
        writer.writerow(row[2])   
    
#HAD TO MANUALLY REPEATED HEADING AND ADD EXTRA SPACES TO UNNAMED BECAUSE OF HOW IMPORTED INTO CLOUD9           
        
            
    
    