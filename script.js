function DestroyOthers(Self) {
    var UsedIds=["#About","#HowToUse","#TopGames"]
    let KeptId=UsedIds.splice(Self,1)
    for (var i=0;i<UsedIds.length;i++) {
        $(UsedIds[i]).hide()
    }
    $(KeptId[0]).show();
}
