/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
        {vin: '11111111311111111', 
        make: 'ford',
        model: 'F-150',
        mileage: 300000,
        title: 'clean',
        transmission: 'automatic',
    
    },
        {vin: '11111111114111111', 
        make: 'honda',
        model: 'civic',
        mileage: 200000,
        title: 'lien',
    
    },
        {vin: '11111117111111111', 
        make: 'chrysler',
        model: 'town and country',
        mileage: 100000
    
    }
    ]);
  };
  
