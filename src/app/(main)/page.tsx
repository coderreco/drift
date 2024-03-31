import Image from 'next/image'
import markAir from '../ui/images/riding/mm-1.jpeg'
import Hero from '../ui/components/common/Hero'
import FeatureWithImage, { CenteredFeature, Feature } from '../ui/components/common/Feature'
import Services from '../ui/components/common/Services'
import FeaturedProducts from '../ui/components/common/FeaturedProducts'
import FeaturedPosts from '../ui/components/common/FeaturedPosts'
import Testimonial from '../ui/components/common/Testimonial'
import Newsletter from '../ui/components/common/Newsletter'


export default function Page() { 

  return (
    <>
      <Hero />
      <FeatureWithImage eyebrow="Supporting riders" heading="A community shop" subheading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione." />
      <Services />
      <FeaturedProducts />
      <CenteredFeature video='https://ev1.pinkbike.org/v1920/41/pbvid-417386.mp4' eyebrow="Featured collection" heading="Forbidden Bike Company" text="Introducing Forbidden Bike Company, the ultimate collection of high-performance bikes designed for thrill-seekers and adventure enthusiasts. Experience the power, speed, and precision that will take your riding to new heights. Get ready to conquer the trails and embrace the adrenaline rush." />
      <FeaturedPosts />
      <Newsletter />
      <Testimonial />
      <Feature eyebrow="Supporting riders" heading="A community shop" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione." />
    </>
  )
}