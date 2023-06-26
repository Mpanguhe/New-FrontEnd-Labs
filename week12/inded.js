$(document).ready(function() {
    let entities = []; // Array to store entities
  
    // Retrieve and display existing entities
    function loadEntities() {
      const tableBody = $('#entityTable tbody');
      tableBody.empty();
  
      entities.forEach(function(entity, index) {
        const row = `
          <tr data-index="${index}">
            <td>${entity.name}</td>
            <td>${entity.description}</td>
            <td>
              <button class="btn btn-sm btn-primary edit-btn">Edit</button>
              <button class="btn btn-sm btn-danger delete-btn">Delete</button>
            </td>
          </tr>
        `;
        tableBody.append(row);
      });
    }
  
    // Add new entity
    $('#entityForm').submit(function(event) {
      event.preventDefault();
  
      const name = $('#nameInput').val();
      const description = $('#descriptionInput').val();
  
      const newEntity = { name: name, description: description };
      entities.push(newEntity);
  
      loadEntities();
      $('#entityForm')[0].reset();
    });
  
    // Edit entity
    $(document).on('click', '.edit-btn', function() {
      const row = $(this).closest('tr');
      const entityIndex = row.data('index');
      const entity = entities[entityIndex];
  
      const newName = prompt('Enter a new name:', entity.name);
      const newDescription = prompt('Enter a new description:', entity.description);
  
      if (newName && newDescription) {
        entity.name = newName;
        entity.description = newDescription;
  
        loadEntities();
      }
    });
  
    // Delete entity
    $(document).on('click', '.delete-btn', function() {
      const row = $(this).closest('tr');
      const entityIndex = row.data('index');
  
      if (confirm('Are you sure you want to delete this entity?')) {
        entities.splice(entityIndex, 1);
  
        loadEntities();
      }
    });
  
    // Initial load of entities
    loadEntities();
  });
  