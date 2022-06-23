Template.addItem.events({
    'keypress #js-addItem'(e){
        if(e.keyCode == 13){
            let item = $("#js-addItem").val();
            if (item == ""){
                console.log("It cannot be empty!");
                $("#js-addItem").addClass("errorBox");
                alert("Cannot be empty");
            }
            else {
                console.log("You entered: ",item);
                $("#js-addItem").removeClass("errorBox");
                listdb.insert({
                    "item": item,
                    "bought": false
                });
            }
            $("#js-addItem").val("");

        }
    }
});