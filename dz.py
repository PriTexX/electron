m = ['0','1','2','3','4']   #01234
data = []                   #СЕРГЙ
for i in m:
	for j in m:
		for l in m:
			for h in m:
				for b in m:
					data.append(i+j+l+h+b)
def check(x):
	if x[0]=='4' or x[4]=='4':  return 0
	count = 0
	for i in range(1,len(x)-1):
		if x[i]=='4':  count+=1
		if x[i]=='1':
			if x[i-1]=='4' or x[i+1]=='4':  return 0
	if count > 1:  return 0
	return 1
count = 0	
for i in data:
	count += check(i)
print(count)