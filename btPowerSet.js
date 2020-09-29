function findAllPowerSet(originalSet, resultSet=[[]], currentSet = [], startAt=0){
    for(let position = startAt; position< originalSet.length; position++){
        currentSet.push(originalSet[position]);

        resultSet.push([...currentSet]);
        console.log(resultSet);

        findAllPowerSet(originalSet, resultSet, currentSet, position+1);

        currentSet.pop();
    }

    return resultSet;
}

function btPowerSet(originalSet){
    return findAllPowerSet(originalSet);
}