$(document).ready(function () {
    function loadUsers() {
      $.get('/users', function (users) {
        $('#userTable').empty();
        users.forEach(user => {
          $('#userTable').append(`
            <tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>
                <button onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
              </td>
            </tr>
          `);
        });
      });
    }
  
    $('#userForm').submit(function (e) {
      e.preventDefault();
      const id = $('#userId').val();
      const user = { name: $('#name').val(), email: $('#email').val() };
  
      if (id) {
        $.ajax({ url: `/users/${id}`, method: 'PUT', data: JSON.stringify(user), contentType: 'application/json', success: loadUsers });
      } else {
        $.post('/users', user, loadUsers);
      }
  
      $('#userId').val('');
      $('#name').val('');
      $('#email').val('');
    });
  
    window.editUser = function (id, name, email) {
      $('#userId').val(id);
      $('#name').val(name);
      $('#email').val(email);
    };
  
    window.deleteUser = function (id) {
      $.ajax({ url: `/users/${id}`, method: 'DELETE', success: loadUsers });
    };
  
    loadUsers();
  });
  