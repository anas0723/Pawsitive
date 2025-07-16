import CurvedUnderlineTitle from "@/components/CurvedUnderlineTitle";

export default function HomePage() {
  return (
    <div className="space-y-8 bg-black p-10 min-h-screen">
      <CurvedUnderlineTitle text="About Us" iconSrc="/icons/about-us-main.png" />
      <CurvedUnderlineTitle text="Get Involved" iconSrc="/icons/involved.png" />
      <CurvedUnderlineTitle text="Shelters & Rescues" />
      <CurvedUnderlineTitle text="Blogs" />
      <CurvedUnderlineTitle text="Shop" />
      <CurvedUnderlineTitle text="Contact" />
    </div>
  );
}
