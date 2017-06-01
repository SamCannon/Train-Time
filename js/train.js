/*************************************************************************
**************************************************************************
**************************************************************************
**************************************************************************
*************************************************************************/

$(document).ready(function() {

  var config = {
      apiKey: "AIzaSyDAw4DaMo_tc1YfJ4WppowsIoinzcn1s4A",
      authDomain: "trains-c433b.firebaseapp.com",
      databaseURL: "https://trains-c433b.firebaseio.com",
      projectId: "trains-c433b",
      storageBucket: "trains-c433b.appspot.com",
      messagingSenderId: "716786325201"
    };

    firebase.initializeApp(config);

    var db = firebase.database();

    var ref = db.ref();

    var name;
    var dest;
    var time;
    var freq;

    $("#addTrain").click(function() {

        name = $("#name").val();
        dest = $("#destination").val();
        time = $("#time").val();
        freq = $("#frequency").val();

        db.ref().push().set({
          name: name,
          destination: dest,
          time: time,
          frequency: freq
        });

        $("#name").val("");
        $("#destination").val("");
        $("#time").val("");
        $("#frequency").val("");

    });

  
  ref.on("child_added", function(snapshot, prevChildKey) {
    
    var newTrain = snapshot.val();

    var i = 1;

    var tr = $("<tr>");

    var tdName = $("<td>");
    var tdDest = $("<td>");
    var tdTime = $("<td>");
    var tdFreq = $("<td>");

    var nameData = tdName.append(newTrain.name).attr("id", "name"+i);
    var destData = tdDest.append(newTrain.destination).attr("id", "dest"+i);
    var timeData = tdTime.append(newTrain.time).attr("id", "time"+i);
    var freqData = tdFreq.append(newTrain.frequency).attr("id", "freq"+i);

    var row = tr.attr("id", "row"+i);

    row.append(nameData);
    row.append(destData);
    row.append(timeData);
    row.append(freqData);

    

    $("#dispTab").append(row);

    i++;
  });

});