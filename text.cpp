string str = "oabcdeafghijklmnopqiedssdadasd"

//bcdeafghijklmnopq
    
string ans = "bcdeafghijklmnopq"

// oabc

vector<int>count(26); 

// for(int i=0;i<str.size();i++){
    // count[str[i]]++;
// }

// oabcdea
// 

int maxLength = 0;
string maxString = "";

for(int i=0;i<str.size();i++){
    string tempStr = "";

    for(int j=i;j<str.size();j++){
        tempStr+=str[j];
        count[str[j]]++;
        if(count[str[j]]>1){
            break;
        }
    }
    if(maxLength<tempStr.size()){
        maxLength = tempStr.size();
        maxString = tempStr;
    }
}

return maxString;

// oabcdeafghijklmnopqiedssdadasd

// oabcdea


map<char,int>mpp;







