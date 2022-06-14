const cars = [
        {vin: '11111111111111111', 
        make: 'ford',
        model: 'F-150',
        mileage: 300000,
        title: 'clean',
        transmission: 'automatic',
    
    },
        {vin: '11111111111111111', 
        make: 'honda',
        model: 'civic',
        mileage: 200000,
        title: 'lien',
    
    },
        {vin: '11111111111111111', 
        make: 'chrysler',
        model: 'town and country',
        mileage: 100000
    
    }
    ]

 exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars);
  };
  
