import { Component,ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public data: any[];

  constructor() {
    this.data = [
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Barneys New York',
            website: 'https://www.barneys.com/'
          },
          {
            storeName: 'J. C. Penney',
            website: 'https://jcp.com/'
          },
          {
            storeName: 'Von Maur',
            website: 'http://www.vonmaur.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Fax',
        retailerType: 'Outdoors Shop',
        productLine: 'Camping Equipment',
        productType: 'Cooking Gear',
        product: 'TrailChef Deluxe Cook Set',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 59628.66,
        quantity: 489,
        grossMargin: 0.34754797,
        id: 10
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Barneys New York',
            website: 'https://www.barneys.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Fax',
        retailerType: 'Outdoors Shop',
        productLine: 'Camping Equipment',
        productType: 'Sleeping Bags',
        product: 'Hibernator Extreme',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 87728.96,
        quantity: 352,
        grossMargin: 0.39814629,
        id: 15
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Barneys New York',
            website: 'https://www.barneys.com/'
          },
          {
            storeName: 'Von Maur',
            website: 'http://www.vonmaur.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Telephone',
        retailerType: 'Outdoors Shop',
        productLine: 'Camping Equipment',
        productType: 'Lanterns',
        product: 'EverGlow Butane',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 6940.03,
        quantity: 109,
        grossMargin: 0.36186587,
        id: 20
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'J. C. Penney',
            website: 'https://jcp.com/'
          },
          {
            storeName: 'Von Maur',
            website: 'http://www.vonmaur.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Fax',
        retailerType: 'Outdoors Shop',
        productLine: 'Mountaineering Equipment',
        productType: 'Safety',
        product: 'Granite Climbing Helmet',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 62464.88,
        quantity: 898,
        grossMargin: 0.24468085,
        id: 25
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'J. C. Penney',
            website: 'https://jcp.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Web',
        retailerType: 'Outdoors Shop',
        productLine: 'Mountaineering Equipment',
        productType: 'Climbing Accessories',
        product: 'Granite Belay',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 19476.8,
        quantity: 296,
        grossMargin: 0.47613982,
        id: 30
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'J. C. Penney',
            website: 'https://jcp.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Web',
        retailerType: 'Outdoors Shop',
        productLine: 'Mountaineering Equipment',
        productType: 'Climbing Accessories',
        product: 'Granite Chalk Bag',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 4621.68,
        quantity: 262,
        grossMargin: 0.51643991,
        id: 35
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'J. C. Penney',
            website: 'https://jcp.com/'
          },
          {
            storeName: 'Barneys New York',
            website: 'https://www.barneys.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Telephone',
        retailerType: 'Outdoors Shop',
        productLine: 'Mountaineering Equipment',
        productType: 'Tools',
        product: 'Granite Axe',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 32870.4,
        quantity: 856,
        grossMargin: 0.49166667,
        id: 40
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'J. C. Penney',
            website: 'https://jcp.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Telephone',
        retailerType: 'Outdoors Shop',
        productLine: 'Personal Accessories',
        productType: 'Knives',
        product: 'Edge Extreme',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 30940.25,
        quantity: 275,
        grossMargin: 0.28895209,
        id: 45
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Barneys New York',
            website: 'https://www.barneys.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Telephone',
        retailerType: 'Outdoors Shop',
        productLine: 'Outdoor Protection',
        productType: 'First Aid',
        product: 'Compact Relief Kit',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 4057.2,
        quantity: 180,
        grossMargin: 0.60070985,
        id: 50
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Stage Stores',
            website: 'https://www.stage.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Telephone',
        retailerType: 'Golf Shop',
        productLine: 'Personal Accessories',
        productType: 'Watches',
        product: 'Kodiak',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 7939.8,
        quantity: 66,
        grossMargin: 0.44272652,
        id: 55
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Stage Stores',
            website: 'https://www.stage.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Web',
        retailerType: 'Golf Shop',
        productLine: 'Personal Accessories',
        productType: 'Eyewear',
        product: 'Inferno',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 12935,
        quantity: 199,
        grossMargin: 0.39374952,
        id: 60
      },
      {
        availability: false,
        availableStores: [],
        retailerCountry: 'United States',
        orderMethodType: 'Web',
        retailerType: 'Golf Shop',
        productLine: 'Personal Accessories',
        productType: 'Knives',
        product: 'Pocket Gizmo',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 866.2,
        quantity: 71,
        grossMargin: 0.59836066,
        id: 65
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Williams Hills',
            website: 'https://williams.h.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Telephone',
        retailerType: 'Golf Shop',
        productLine: 'Golf Equipment',
        productType: 'Irons',
        product: 'Lady Hailstorm Steel Irons',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 16025.28,
        quantity: 32,
        grossMargin: 0.44535634,
        id: 70
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Sendora Mall',
            website: 'https://sendora.com/'
          },
          {
            storeName: 'High Octane',
            website: 'https://high.octane.us/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Web',
        retailerType: 'Golf Shop',
        productLine: 'Golf Equipment',
        productType: 'Woods',
        product: 'Lady Hailstorm Steel Woods Set',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 53082.54,
        quantity: 62,
        grossMargin: 0.44845066,
        id: 75
      },
      {
        availability: false,
        availableStores: [],
        retailerCountry: 'United States',
        orderMethodType: 'Mail',
        retailerType: 'Golf Shop',
        productLine: 'Golf Equipment',
        productType: 'Golf Accessories',
        product: 'Course Pro Umbrella',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 5911.05,
        quantity: 492,
        grossMargin: 0.50059634,
        id: 80
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Stage Stores',
            website: 'https://www.stage.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Web',
        retailerType: 'Department Store',
        productLine: 'Camping Equipment',
        productType: 'Cooking Gear',
        product: 'TrailChef Cup',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 21434.73,
        quantity: 6134,
        grossMargin: 0.75675458,
        id: 85
      },
      {
        availability: false,
        availableStores: [],
        retailerCountry: 'United States',
        orderMethodType: 'Web',
        retailerType: 'Department Store',
        productLine: 'Camping Equipment',
        productType: 'Cooking Gear',
        product: 'TrailChef Utensils',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 11394.39,
        quantity: 609,
        grossMargin: 0.46552646,
        id: 90
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Wen Brother Stores',
            website: 'https://www.wen.com/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Mail',
        retailerType: 'Department Store',
        productLine: 'Camping Equipment',
        productType: 'Sleeping Bags',
        product: 'Hibernator Lite',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 50892.68,
        quantity: 601,
        grossMargin: 0.29145017,
        id: 95
      },
      {
        availability: true,
        availableStores: [
          {
            storeName: 'Soeges Pan',
            website: 'https://www.soeges.us/'
          }
        ],
        retailerCountry: 'United States',
        orderMethodType: 'Mail',
        retailerType: 'Department Store',
        productLine: 'Camping Equipment',
        productType: 'Sleeping Bags',
        product: 'Hibernator Camp Cot',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 150163.09,
        quantity: 1529,
        grossMargin: 0.33560737,
        id: 100
      },
      {
        availability: false,
        availableStores: [],
        retailerCountry: 'United States',
        orderMethodType: 'Telephone',
        retailerType: 'Department Store',
        productLine: 'Camping Equipment',
        productType: 'Packs',
        product: 'Canyon Mule Carryall',
        year: 2012,
        quarter: 'Q1 2012',
        revenue: 26806.92,
        quantity: 388,
        grossMargin: 0.40396584,
        id: 105
      }
    ]
  }

  ngOnInit(): void {
  }

}
