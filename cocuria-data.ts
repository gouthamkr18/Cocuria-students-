export type Activity = {
  title: string;
  age: string;
  styles: string;
  image: string;
  subcategories: string[];
};

export const activities: Activity[] = [
  { title: 'Dance', age: 'Kids & adults', styles: 'Bharatanatyam · Contemporary · Bollywood', subcategories: ['Bharatanatyam', 'Semi-Classical', 'Contemporary', 'Bollywood', 'Hip-Hop', 'Cinematic Folk', 'Freestyle'], image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80' },
  { title: 'Martial arts', age: 'Kids & adults', styles: 'Karate · Kalari · Self defence', subcategories: ['Karate', 'Kalari', 'Taekwondo', 'Self Defence'], image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80' },
  { title: 'Drawing & painting', age: 'Kids & adults', styles: 'Canvas · Watercolour · Digital art', subcategories: ['Canvas Painting', 'Watercolour', 'Digital Art', 'Sketching'], image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80' },
  { title: 'Music & vocal', age: 'Kids & adults', styles: 'Carnatic · Hindustani · Western vocal', subcategories: ['Carnatic', 'Hindustani', 'Western Vocal'], image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80' },
  { title: 'Musical instruments', age: 'Kids & adults', styles: 'Guitar · Keyboard · Violin', subcategories: ['Guitar', 'Keyboard', 'Violin', 'Drums', 'Flute'], image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80' },
  { title: 'Yoga & wellness', age: 'Kids & adults', styles: 'Yoga · Mindfulness · Meditation', subcategories: ['General Yoga', 'Power Yoga', 'Mindfulness', 'Meditation'], image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80' },
  { title: 'Fitness & movement', age: 'Adults & eligible teens', styles: 'Zumba · Aerobics · Cardio fitness', subcategories: ['Zumba', 'Aerobics', 'Cardio Fitness'], image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80' },
  { title: 'Public speaking', age: 'Kids & adults', styles: 'Confidence · Communication · Stage presence', subcategories: ['Confidence Building', 'Communication Skills', 'Stage Presence'], image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' },
];

export const activityByTitle = (title: string) => activities.find((activity) => activity.title === title);
