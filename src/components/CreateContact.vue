<template>
  <div class="form">
    <div class="container">
      <h1>CREATE CONTACT</h1>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Contact Name *" ngModel />
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="Contact Email *" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Phone" />
        </div>

        <div class="form-group">
          <input type="radio" checked value="personal" name="type" />
          <label for="huey">Personal</label>
          <input type="radio" value="professional" name="type" />
          <label for="huey">Professional</label>
        </div>
        <span> <span style="color: red;">*</span> Required Fileds </span>

        <div class="form-group">
          <button type="submit" class="btn">
            CREATE
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
