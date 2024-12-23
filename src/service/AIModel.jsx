import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_AI_MODEL;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url(use free available images on web like pexels, wikipedia), Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotels\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100/night\",\n      \"imageUrl\": \"https://www.the-d.com/media/images/the-d-hotel-exterior-1024x683.jpg\",\n      \"geoCoordinates\": \"36.1694,-115.1429\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"A budget-friendly hotel located on Fremont Street, offering a casino, restaurants, and entertainment.\"\n    },\n    {\n      \"name\": \"Plaza Hotel & Casino\",\n      \"address\": \"1 South Main Street, Las Vegas, NV 89101\",\n      \"price\": \"$60-$120/night\",\n      \"imageUrl\": \"https://www.plazahotelcasino.com/images/homepage-carousel/plaza-hotel-casino-las-vegas.jpg\",\n      \"geoCoordinates\": \"36.1697,-115.1424\",\n      \"rating\": \"4 stars\",\n      \"description\": \"A historic hotel located on Fremont Street, offering a casino, restaurants, and entertainment.\"\n    },\n    {\n      \"name\": \"Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$70-$150/night\",\n      \"imageUrl\": \"https://www.goldennugget.com/media/images/hotel/gnlv-exterior-hero.jpg\",\n      \"geoCoordinates\": \"36.1698,-115.1417\",\n      \"rating\": \"4 stars\",\n      \"description\": \"A luxury hotel on Fremont Street, known for its shark tank, casino, and restaurants.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40-$80/night\",\n      \"imageUrl\": \"https://www.circuscircus.com/media/images/hotel-exterior.jpg\",\n      \"geoCoordinates\": \"36.1131,-115.1703\",\n      \"rating\": \"3 stars\",\n      \"description\": \"A budget-friendly hotel on the Strip, offering a circus theme, casino, and family-friendly activities.\"\n    },\n    {\n      \"name\": \"The Strat Hotel, Casino & SkyPod\",\n      \"address\": \"2000 Las Vegas Blvd S, Las Vegas, NV 89104\",\n      \"price\": \"$50-$100/night\",\n      \"imageUrl\": \"https://www.thestrat.com/media/images/hotel-exterior.jpg\",\n      \"geoCoordinates\": \"36.1244,-115.1658\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"A hotel on the Strip with an observation tower, casino, and restaurants.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"bestTime\": \"Morning\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a canopy of LED lights, street performers, and casinos.\",\n          \"placeImageUrl\": \"https://www.fremontstreetexperience.com/media/images/fremont-street-experience-header.jpg\",\n          \"geoCoordinates\": \"36.1697,-115.1424\",\n          \"ticketPricing\": \"Free\",\n          \"time\": \"2 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 1,\n      \"bestTime\": \"Afternoon\",\n      \"plan\": [\n        {\n          \"placeName\": \"Neon Museum\",\n          \"placeDetails\": \"A museum showcasing vintage Las Vegas neon signs.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/media/images/neon-museum-header.jpg\",\n          \"geoCoordinates\": \"36.1771,-115.1376\",\n          \"ticketPricing\": \"$20\",\n          \"time\": \"1 hour\"\n        }\n      ]\n    },\n    {\n      \"day\": 1,\n      \"bestTime\": \"Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"An outdoor shopping and dining area with the High Roller observation wheel.\",\n          \"placeImageUrl\": \"https://www.caesars.com/linq/media/images/linq-promenade-header.jpg\",\n          \"geoCoordinates\": \"36.1202,-115.1729\",\n          \"ticketPricing\": \"$30\",\n          \"time\": \"2 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"bestTime\": \"Morning\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A free botanical garden with beautiful floral displays.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/media/images/bellagio-conservatory-and-botanical-garden-header.jpg\",\n          \"geoCoordinates\": \"36.1144,-115.1738\",\n          \"ticketPricing\": \"Free\",\n          \"time\": \"1 hour\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"bestTime\": \"Afternoon\",\n      \"plan\": [\n        {\n          \"placeName\": \"The Venetian and The Palazzo\",\n          \"placeDetails\": \"Luxury hotels with a replica of Venice, Italy, including canals and gondolas.\",\n          \"placeImageUrl\": \"https://www.venetian.com/media/images/venetian-and-the-palazzo-header.jpg\",\n          \"geoCoordinates\": \"36.1236,-115.1754\",\n          \"ticketPricing\": \"Free\",\n          \"time\": \"2 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"bestTime\": \"Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Free Show on the Strip\",\n          \"placeDetails\": \"Many hotels on the Strip offer free shows, such as the Bellagio Fountains or the Mirage Volcano.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/media/images/bellagio-fountains-header.jpg\",\n          \"geoCoordinates\": \"36.1144,-115.1738\",\n          \"ticketPricing\": \"Free\",\n          \"time\": \"1 hour\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"bestTime\": \"Morning\",\n      \"plan\": [\n        {\n          \"placeName\": \"Hoover Dam\",\n          \"placeDetails\": \"A historic dam located about 30 miles from Las Vegas.\",\n          \"placeImageUrl\": \"https://www.hooverdam.com/media/images/hoover-dam-header.jpg\",\n          \"geoCoordinates\": \"36.0017,-114.9851\",\n          \"ticketPricing\": \"$30\",\n          \"time\": \"3 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"bestTime\": \"Afternoon\",\n      \"plan\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A scenic area with red rock formations, hiking trails, and scenic drives.\",\n          \"placeImageUrl\": \"https://www.nps.gov/redr/media/images/red-rock-canyon-header.jpg\",\n          \"geoCoordinates\": \"36.1229,-115.3542\",\n          \"ticketPricing\": \"$15\",\n          \"time\": \"3 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"bestTime\": \"Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Local Bar or Restaurant\",\n          \"placeDetails\": \"Enjoy a final meal and drinks at a local bar or restaurant.\",\n          \"placeImageUrl\": null,\n          \"geoCoordinates\": null,\n          \"ticketPricing\": \"Varies\",\n          \"time\": \"2 hours\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary assumes you have a rental car or are comfortable using public transportation.\n* The prices for hotels and attractions are approximate and may vary.\n* You can adjust the itinerary based on your interests and preferences.\n* It's recommended to book attractions in advance, especially during peak season.\n* Consider bringing reusable water bottles and snacks to save money.\n* Take advantage of free activities, such as walking along the Strip, enjoying the Bellagio Conservatory, or watching the free shows.\n* Don't forget to pack comfortable shoes, sunscreen, and a hat.\n"},
          ],
        },
      ],
    });