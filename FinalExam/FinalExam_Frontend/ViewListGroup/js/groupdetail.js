var groupEdit = [];

function openGroupDetail(id){
    $(".main-content").load("groupdetail.html");
    $.get("http://localhost:8080/api/v1/groups/"+ id, function(data, status){
        
        // reset list groups
        groupEdit = [];

        // error
        if (status == "error") {
            alert("Error when loading data");
            return;
        }

        var html = '<table>';
        html += '<tr><th>Group Name</th><td>'+ data.groupName +'</td></tr>';
        html += '<tr><th>Member</td><td>'+ data.totalMember +'</td></tr>';
        html += '<tr><th>Creator</th><td>'+ data.creator +'</td></tr>';
        html += '<tr><th>Create Date</td><td>'+ convertExpandedDateToDate(data.createDate) +'</td></tr>';
        html += '</table>';

        var html1 = '<div class="btnedit">'+
                        '<button type="button" class="btn2 btn-info add-new1" data-toggle="modal" onclick="openEditModal('+ id +')"><i class="far fa-edit" style="font-size:24px"></i>Edit</button>'+
                    '</div>';
        document.getElementById('container-groupdetail').innerHTML = html;
        document.getElementById('container-btnedit').innerHTML = html1;
    });
}

function openEditModal(id){
    var index = groups.findIndex(x => x.id == id);

    document.getElementById("id").value = groups[index].id;
    document.getElementById("name").value = groups[index].name;
    
    showModalEdit();
}

function showModalEdit(){
    $('#myModalEdit').modal('show');
}

function hideModalEdit(){
    $('#myModalEdit').modal('hide'); 
}
function updateGroup() {
    var id = $("#id").val();
    var name = $("#name").val();
    var member = $("#member").val();
    var creator = $("#creator").val();
    var group = {
        name: name,
        member: member,
        creator: creator
    };
    $.ajax({
        url: 'http://localhost:8080/api/v1/groups/' + id,
        type: 'PUT',
        data: JSON.stringify(group),
        contentType: "application/json",
        success: function (result) {
            // success
            hideModal();
            showSuccessAlert();
            buildtable();
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
// function saveEdit(){
//     var id = document.getElementById("id").value;
//     var name = document.getElementById("name").value;

//     var index = groups.findIndex(x => x.id == id);
//     var member = groups[index].member;
//     var creator = groups[index].creator;
//     var createDate = groups[index].createDate;

//     if(name != ""){
//         if(name == groups[index].name){
//             alert("Have not changed the new name!");
//         }
//         else{
//             if(checkNameGroup(name)){
//                 var group = {
//                     name: name,
//                     member: member,
//                     creator: creator,
//                     createDate: createDate
//                 };
            
//                 $.ajax({
//                     url: 'http://localhost:8080/api/v1/groups/' + id,
//                     type: 'PUT',
//                     data: JSON.stringify(group),
//                     contentType: "application/json",
//                     success: function(result) {
//                         // error
//                         if (result == undefined || result == null) {
//                             alert("Error when loading data");
//                             return;
//                         }
            
//                         // success
//                         hideModalEdit();
//                         showSuccessAlert1();
//                         openGroupDetail(id);
//                     }
//                 });
//             }
//             else alert("Group name is exists. Enter another name!");
//         }
//     }
//     else alert("Please fill out the form");
// }

function showSuccessAlert1(){
    $("#alert-s1").fadeTo(2000,500).slideUp(500, function(){
        $("#alert-s1").slideUp(500);
    });
}