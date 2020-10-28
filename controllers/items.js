let items = [];
var idNum = 1;

export const getAllItems = (req,res) => { //get all items
    res.send(items);
}

export const addNewItem =  (req, res)=>{   
    const item = req.body;

    if(isNum(item.count) && typeof(item.count=="number")){
        if(isString(item.name)){
            if(item.description!=null && isString(item.description)){
                items.push({ ...item,id: idNum});
                res.send(`item by id ${idNum} add`);
                idNum++;
            }
            else res.send(`description must be string`)
        }
        else res.send(`name must be string `)
    }
    else res.send(`count must be positive number `)
}

export const getItemById= (req,res)=>{     
    const id = req.params.id;
    if (isNum(id)){
        const itemFind = items.find((items)=> items.id == id )
        if(itemFind)
        {
            res.send(itemFind);
        } else {
            res.send(` there is no item by id ${id} `);
        }
    } else {
        res.send(`id must be number `)
    }
}

export const updateItemById =  (req,res)=>{               //update item   
    const id = req.params.id;
    const {name, description, count } = req.body;
    if (isNum(id)){
        const itemUpdate = items.find((items)=> items.id==id);
        if(itemUpdate){
            if (name){
                if(name.length>0 && isString(name)){
                    itemUpdate.name = name;
                } else res.send(`name must be string `)
            }
            if (description){
                if(description.length>0 && isString(description)){
                    itemUpdate.description=description;
                } else res.send(`description cant be empty`)
            }
            if (count){
                if(isNum(count)){
                    itemUpdate.count=count;
                } else res.send(`count must be number `)
            }
            //else{res.send(` item by id ${id} update`);}
        }
    }else {
        res.send(`id must be number `)
    }
    res.end();
}

export const deleteById= (req, res)=>{  
    const id =req.params.id;
    if (isNum(id)){
        const itemFind = items.find((items)=> items.id == id);
            if(itemFind){
                items = items.filter((item)=> item.id != id); 
                res.send(` item by id ${id} deleted`);
            }else{
                res.send(` there is no item by id ${id} to delete `);
            }
    }else res.send(`id must be number `)

}

export const withdrawItem =  (req,res)=>{              
    const id = req.params.id;
    const count = req.params.amount;
    if ( isNum(id) && isNum(count))
    {
        const itemFind = items.find((items)=> items.id == id);
        if((itemFind) && itemFind.count>=count  ){
            itemFind.count-=parseInt(count);
            res.send(`item by id ${id} count update to ${itemFind.count}`);
        } else {
            if(!itemFind){
                res.send(`there is no item by id ${id}`);
            }
            else{
                res.send(`There are not enough items your request: ${count}, our amount of item: ${itemFind.count}`);
            } 
        }
    } else res.send('id and count must be number')

}

export const depositItem =  (req,res)=>{               //deposit item                                                         // check if amount is number
    const id = req.params.id;
    const count = req.params.amount;
    if (isNum(id) && isNum(count)){
        const itemFind = items.find((items)=> items.id == id);
        if(itemFind){
            itemFind.count+=parseInt(count);
            res.send(` item by id ${id} count update to ${itemFind.count}`);
        }else{
            res.send(`there is no item by id ${id}`);
        }
    } else res.send('id and count must be number')
}

function isNum(str) {
    for(var i=0; i< str.length; i++){
        if(!/[0-9]/.test(str[i])){
            return false;
        }
    }
    return true;
}

function isString(str) {
    for(var i=0; i<str.length; i++){
        if(!/[a-zA-z0-9 ]/.test(str[i])){
            return false;
        }
    }
    return true
}
