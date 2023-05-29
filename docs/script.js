function DestroyOthers(Self) {
    var UsedIds=["#About","#HowToUse","#TopGames"]
    let KeptId=UsedIds.splice(Self,1)
    console.log(UsedIds)
    for (var i=0;i<UsedIds.length;i++) {
        console.log("Hiding: "+UsedIds[i])
        $(UsedIds[i]).hide()
    }
    $(KeptId[0]).show();
}