function openListGroup(){
    $(".main-content").load("list-group.html");
    builtTable();
}

var groups = [];

function Group(id, name, member, creator, createDate){
    this.id = id;
    this.name = name;
    this.member = member;
    this.creator = creator;
    this.createDate = createDate;
}
var page = 1;
    size = 5;
    type = "";
    field = "";
    keyword = "";

function initGroups(){
    //init data
    $.get("http://localhost:8080/api/v1/groups?page=" + page + "&size=" + size+ "&sortType=" + type
    + "&sortField=" + field + "&search=" + keyword, function(data,status){
        
        // reset list groups
        groups = [];

        $('tbody').empty();
        // success
        parseData(data);
        fillGroupToTable();
    });
}

function parseData(data) {
    groups = [];
    data.forEach(function(item) {
        groups.push(new Group(item.groupId, item.groupName, item.totalMember, item.creator, item.createDate));
    });
}

function fillGroupToTable(){
    var stt = 1;
    $('tbody').empty();
    groups.forEach(function(item){
        if(stt%2==0){
            $('tbody').append(
            '<tr>'+
                '<td><input type="checkbox" name="idGroup" value="'+ item.id +'"></td>'+
                '<td>' + item.id + '</td>'+
                '<td><a href="#" onclick="openGroupDetail('+ item.id +')">' + item.name + '</a></td>'+  
                '<td>' + item.member + '</td>'+
                '<td>' + item.creator + '</td>'+
                '<td>' + convertExpandedDateToDate(item.createDate) + '</td>'+
            '</tr>')
        }
        else{
            $('tbody').append(
            '<tr style="background-color: lightgray;">'+
                '<td><input type="checkbox" name="idGroup" value="'+ item.id +'"></td>'+
                '<td>' + item.id + '</td>'+
                '<td><a href="#" onclick="openGroupDetail('+ item.id +')">' + item.name + '</a></td>'+
                '<td>' + item.member + '</td>'+
                '<td>' + item.creator + '</td>'+
                '<td>' + convertExpandedDateToDate(item.createDate) + '</td>'+
            '</tr>')
        }
        stt++;
    });
}

function builtTable() {
    // $('tbody').empty();
    initGroups();
}


function openAddModal(){
    resetForm();
    showModal();
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("member").value = "";
    document.getElementById("creator").value = "";
}

function showModal(){
    $('#myModal').modal('show');
}

function hideModal(){
    $('#myModal').modal('hide');
}

function convertExpandedDateToDate(exDate){
    var date = new Date(exDate);
    var dd = exDate.slice(8,10);
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();

    if(mm<10) mm='0'+mm;
    return dd+'/'+mm+'/'+yyyy;
}




function addGroup() {

    // get data
    var name = document.getElementById("name").value;
    var member = document.getElementById("member").value;
    var creator = document.getElementById("creator").value;

    // TODO validate
    // then fail validate ==> return;
    // var today = new Date();

    var group = {
        groupName: name,
        totalMember: member,
        creator: creator,
        // createDate: convertDateToExpandedDate(today),
    };

    $.ajax({
        url: 'http://localhost:8080/api/v1/groups',
        type: 'POST',
        data: JSON.stringify(group), // body
        contentType: "application/json", // type of body (json, xml, text)
        // dataType: 'json', // datatype return
        success: function(data, textStatus, xhr) {
            hideModal();
            showSuccessAlert();
            initGroups();
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}

function save() {
    var id = document.getElementById("id").value;
    console.log(id);
    if (id == null || id == "") {
        addGroup();
    }else {
        updateGroup();
    }
}

function checkNameGroup(name){
    var index = 0;
    var check = false;
    // index = groups.findIndex(x => x.name.localeCompare(name));

    groups.forEach(function(item){
        if(item.name.localeCompare(name) == 0){
            index += 1;
        }
    })
    if (index == 0){
        check = true;
    }
    return check;
}

function openDeleteConfirm(){
    var checkbox = document.getElementsByName('idGroup');
    var result = [];
    var names = [];    

    // Lặp qua từng checkbox để lấy giá trị
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked === true){
            result.push(checkbox[i].value);  //Get ID từng checkbox
            var index = groups.findIndex(x => x.id == checkbox[i].value);
            names.push(groups[index].name);
        }
    }

    var result1 = confirm("Are you sure to delete " + names.toString() + " ?");
    if (result1) {
        deleteGroup(result);
    }
}

function deleteGroup(ids){
    // var countGroup = groups.length - ids.length;
    for (var i = 0; i < ids.length; i++){
        var id = ids[i];
        $.ajax({
            
            url: "http://localhost:8080/api/v1/groups/" + id,
            type: 'DELETE',
            success: function(result) {
                // error
                if (result == undefined || result == null) {
                    alert("Error when loading data");
                    return;
                }
    
                // success
                showDeleteAlert();
                builtTable();
            }
        });
    }
}


function showSuccessAlert(){
    $("#alert-success").fadeTo(2000,500).slideUp(500, function(){
        $("#alert-success").slideUp(500);
    });
}

function showDeleteAlert(){
    $("#alert-danger").fadeTo(2000,500).slideUp(500, function(){
        $("#alert-danger").slideUp(500);
    });
}

function nextPage(){
    page++;
    resetForm();
    initGroups();
}

function prePage(){
    if(page>1)
    page--;
    resetForm();
    initGroups();
}

function sortASC(){
    type = "ASC";
    resetForm();
    initGroups();
}

function sortDESC(){
    type = "DESC";
    resetForm();
    initGroups();
}

function sortNameASC(){
    type = "ASC";
    field="groupName";
    resetForm();
    initGroups();
}

function sortNameDESC(){
    type = "DESC";
    field="groupName";
    resetForm();
    initGroups();
}

function sortMemASC(){
    type = "ASC";
    field="totalMember";
    resetForm();
    initGroups();
}

function sortMemDESC(){
    type = "DESC";
    field="totalMember";
    resetForm();
    initGroups();
}

function sortCreateASC(){
    type = "ASC";
    field="creator";
    resetForm();
    initGroups();
}

function sortCreateDESC(){
    type = "DESC";
    field="creator";
    resetForm();
    initGroups();
}
function sortDateASC(){
    type = "ASC";
    field="createDate";
    resetForm();
    initGroups();
}

function sortDateDESC(){
    type = "DESC";
    field="createDate";
    resetForm();
    initGroups();
}

function search(){
    keyword = $("#search").val();
    resetForm();
    initGroups();
}