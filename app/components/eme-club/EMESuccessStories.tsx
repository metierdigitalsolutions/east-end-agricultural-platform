import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { successStories } from './emeClubData';

export function EMESuccessStories() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl text-center mb-12 text-gray-900">Member Success Stories</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {successStories.map((story, index) => (
          <Card key={index} className={story.bgColor}>
            <CardContent className="py-8">
              <div className="flex items-center mb-4">
                <ImageWithFallback
                  src={story.image}
                  alt={`${story.name} testimonial`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-600">{story.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "{story.testimonial}"
              </p>
              <div className="flex items-center">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}