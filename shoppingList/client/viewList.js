Template.viewList.helpers({
    allItems(){ //Return a sorted list
        return listdb.find({}, {
            sort:{
                item:1
            }
        });
    }
});

Template.viewList.events({
    'click .js-checkOff'(){
        let myId = this._id;
        let didIbuy = listdb.findOne({_id: myId}).bought;
        didIbuy = !didIbuy;
        listdb.update({_id: myId}, {$set:{
            "bought": didIbuy
        }});
    },
    'click .js-delete'(){
        let myId = this._id;
        listdb.remove({_id: myId});
    }
});