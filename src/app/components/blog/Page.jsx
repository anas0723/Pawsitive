import BlogHero from './BlogHero';
import BlogList from './BlogList';

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen py-6 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto w-full   px-5">
        <BlogHero />
        <BlogList />
      </div>
    </main>
  );
} 