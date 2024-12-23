export const selectTravelList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A soul travels in exploration',
        icon: '✈️',
        people: '1'
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Two travels in tandem',
        icon: '🍻',
        people: '2'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A family travels together',
        icon: '👪',
        people: '3 to 5 people'
    },
    {
        id: 4,
        title: 'Group',
        desc: 'A group of friends travels together',
        icon: '🤩',
        people: '6 to 10 people'
    }
]

export const selectBudgetOption = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Budget-friendly travel',
        icon: '💸',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on Moderate travel',
        icon: '🏨',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'High-end travel',
        icon: '💰',
    }
]

export const AI_Prompt = `Generate Travel Plan for Location: {location}, for {days} Days for {people} with a {budget} budget, Give me a Hotels options list with hotelName, hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, place Details, place Image Url, geo Coordinates, ticket Pricing, time travel each of the location for {days} days with each day plan with best time to visit in JSON format.`