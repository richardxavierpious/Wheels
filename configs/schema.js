import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

 
export const CarListing = pgTable('carListing', {
    
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle').notNull(),
    originalPrice : varchar('originalPrice'),
    sellingPrice : varchar('sellingPrice').notNull(),
    category : varchar('category').notNull(),
    condition : varchar('condition').notNull(),
    make : varchar('make').notNull(),
    model : varchar('model').notNull(),
    year : varchar('year').notNull(),
    driveType : varchar('driveType').notNull(),
    transmission : varchar('transmission').notNull(),
    fuelType : varchar('fuelType').notNull(),
    mileage : varchar('mileage').notNull(),
    engineSize : varchar('engineSize'),
    cylinder : varchar('cylinder'),
    color : varchar('color').notNull(),
    door : varchar('door').notNull(),
    vin : varchar('vin'),
    offerType : varchar('offerType'),
    listingDescription : varchar('listingDescription').notNull(),
    features: json('features'),
    createdBy: varchar('createdBy').notNull(),
    postedOn: varchar('postedOn'),
    userName: varchar('userName').notNull().default('Richard Xavier'),
    userImageUrl: varchar('userImageUrl').default('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeXnUu_eS6e6ldeZDvLbp3E7KuLA_enyu7r43-LGXcNwN4efdif4TLxIVOkAdZN846KUI&usqp=CAU')

})

export const CarImages = pgTable('carImages', {

    id: serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(),
    CarListingId: integer('carListingId').notNull().references(()=>CarListing.id)
    
})