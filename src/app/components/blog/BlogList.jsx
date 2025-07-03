import BlogCard from './BlogCard';

const blogs = [
  {
    image: '/images/blog/max-fund.png',
    title: 'MaxFund Shelter, Denver, CO',
    description: 'MaxFund is a true no-kill animal shelter and adoption center in Denver, Colorado. They provide medical care, shelter, and love to animals in need.',
    date: 'March 10, 2024',
    author: 'MaxFund',
  },
  {
    image: '/images/blog/max-fund.png',
    title: 'MaxFund Shelter, Denver, CO',
    description: 'MaxFund is a true no-kill animal shelter and adoption center in Denver, Colorado. They provide medical care, shelter, and love to animals in need.',
    date: 'March 10, 2024',
    author: 'MaxFund',
  },
  {
    image: '/images/blog/max-fund.png',
    title: 'MaxFund Shelter, Denver, CO',
    description: 'MaxFund is a true no-kill animal shelter and adoption center in Denver, Colorado. They provide medical care, shelter, and love to animals in need.',
    date: 'March 10, 2024',
    author: 'MaxFund',
  },
  {
    image: '/images/blog/max-fund.png',
    title: 'MaxFund Shelter, Denver, CO',
    description: 'MaxFund is a true no-kill animal shelter and adoption center in Denver, Colorado. They provide medical care, shelter, and love to animals in need.',
    date: 'March 10, 2024',
    author: 'MaxFund',
  },
  {
    image: '/images/blog/max-fund.png',
    title: 'MaxFund Shelter, Denver, CO',
    description: 'MaxFund is a true no-kill animal shelter and adoption center in Denver, Colorado. They provide medical care, shelter, and love to animals in need.',
    date: 'March 10, 2024',
    author: 'MaxFund',
  },
  {
    image: '/images/blog/max-fund.png',
    title: 'MaxFund Shelter, Denver, CO',
    description: 'MaxFund is a true no-kill animal shelter and adoption center in Denver, Colorado. They provide medical care, shelter, and love to animals in need.',
    date: 'March 10, 2024',
    author: 'MaxFund',
  },
];

export default function BlogList() {
  return (
    <section className="w-full pb-12">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
} 