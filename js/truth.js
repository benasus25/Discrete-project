function Not(x){
    if(x == '1'){
        return '0';
    }
    else{
        return '1';
    }
}

function And_or_char(x1, x2, op){
    if(op == '+'){
        if(x1 == '0' && x2 == '0'){
            return '0';
        }
        else{
            return '1';
        }
    }
    if(op == '*'){
        if(x1 == '1' && x2 == '1'){
            return '1';
        }
        else{
            return '0';
        }
    }
}

//x = input("Enter expression: ");
function truth_values(x){
    test = x
    s1 = []
    s2 = []
    answer={};
    for(var j = 0; j<2; j++){
        for(var k = 0; k<2; k++){
            arr = x.split("")
            for(var i = 0; i<x.length; i++){
                if(arr[i] == 'p'){
                    arr[i] = String(j);
                }
                else if(x[i] == 'q'){
                    arr[i] = String(k);
                }
            }
            x = ""
            for(var i = 0; i<arr.length; i++){
                x+=arr[i];
            }
            for(var i = 0; i<x.length; i++){
    
                if(s1.length!=0 && s1[s1.length - 1]=='~' && s2.length!=0 && (s2[s2.length - 1]=='1'||s2[s2.length - 1]=='0')){
                    var y = s2.pop();
                    s1.pop();
                    s2.push(Not(y));
                }
    
                if(x[i]=='('){
                    s1.push(x[i]);
                }
    
                if(x[i]=='1'||x[i]=='0'){
                    s2.push(x[i]);
                }
    
                if(x[i]=='~'){
                    if(x[i+1]=='1'||x[i+1]=='0'){
                        s2.push(Not(x[i+1]));
                    }
                    else{
                        s1.push(x[i]);
                        s1.push(x[i+1]);
                    }
                    i=i+1;
                }
                if(s2.length >=2 && s1.length!=0 && (s1[s1.length - 1]=='+'||s1[s1.length-1]=='*')){
                    var x1 = s2.pop();
                    var x2 = s2.pop();
                    var op = s1.pop();
                    s2.push(And_or_char(x1, x2, op));
                }
                if(x[i] == '+'|| x[i]== '*'){
                    if(x[i+1]=='1'||x[i+1]=='0'){
                        var y = s2.pop();
                        s2.push(And_or_char(y, x[i+1], x[i]));
                        i = i+1;
                    }
                    else if(x[i+1]=='('){
                        s1.push(x[i]);
                        s1.push(x[i+1]);
                        i = i+1;
                    }
                    else if(x[i+1]=='~'){
                        s1.push(x[i]);
                        if(x[i+2]=='1'||x[i+2]=='0'){
                            s2.push(Not(x[i+2]));
                            i = i+2;
                        }
                        else{
                            s1.push(x[i+1]);
                            s1.push(x[i+2]);
                            i = i+2;
                        }
                    }
                }
                if(x[i]==')'){
                    s1.pop();
                }
            }
            while(s1.length != 0){
                if(s1.length !=0 && s1[s1.length - 1]=='~'){
                    var y = s2.pop();
                    s2.push(Not(y));
                    s1.pop()
                }
                if(s1.length !=0 && s1[s1.length - 1]=='+'||s1[s1.length - 1]=='*'){
                    var x1 = s2.pop();
                    var x2 = s2.pop();
                    var op = s1.pop();
                    s2.push(And_or_char(x1, x2, op));
                }
            }
            //console.log("p: "+String(j)+" "+"q: "+String(k));
            var y = s2.pop();
            if(y == '0'){
                answer[String(j*2+k*1)]='F'
            }else{
                answer[String(j*2+k*1)]='T'
            }
            x = test;           
        }
    }
    
    return answer;
}

module.exports = truth_values;