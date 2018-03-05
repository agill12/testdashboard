import csv
with open('data/newatlantic.csv','r') as fin,open('data/newatlantictest3.csv','w') as fout,open('data/storms.csv','r') as fin2:
    writer=csv.writer(fout)
    hurricanes=csv.reader(fin,delimiter=',')
    storms=csv.reader(fin2,delimiter=',')
    ids_names={}
    for row in hurricanes:
        ids_names[row[0]]=row[1]
    print(ids_names)    
    print(len(ids_names))
      
             
        
        # row.append('CAT4')
        # row.append('L')
        # writer.writerow(row[0:10])
       # maxwind.append(row[7])
    # for row in hurricanes:
    #     row.append('CAT4')
        
    #     all_ids.append(row[0])   
    #     if row[0] in ids:
    #         pass
    #     else:
    #         ids.append(row[0])
    
    
               
    
            
#     for i in maxwind:
#         writer.writerow([i])
         
          
            
        
   
   
    
        
# print (ids)
# print (maxwind)

# print(len(ids))
# print(len(maxwind))
# print(all_ids[0:100])

# i=1
# j=1
# k=1

# while i <3000:
#     if all_ids[i]==ids[j]:
#         truths.append(maxwind[k])
#         i+=1
       
#     elif all_ids[i]!=all_ids[j]:
#         k+=1
#         j+=1
        
        
    
    
 
    
# print(truths[0:2000])
# print(len(all_ids))
# print(len(ids))
# print(len(maxwind))
# print(len(ids2))

#HAD TO MANUALLY REPEATED HEADING AND ADD EXTRA SPACES TO UNNAMED BECAUSE OF HOW IMPORTED INTO CLOUD9           
       
#CHECK AGAINST ID TO GET MAX WIND SPEED AND APPEND MAX CATEGORY 

    
        