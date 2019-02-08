
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bands').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {name: 'Toasters'},
        {name: 'Last Dinosaurs'},
        {name: 'System of a Down'},
        {name: 'Mustard Plug'}
      ]);
    });
};
