import { Fragment, useState } from "react"
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react"
import {
  BellIcon,
  CloudUploadIcon,
  CreditCardIcon,
  CodeIcon,
  MenuIcon,
  QrcodeIcon,
  RefreshIcon,
  ServerIcon,
  XIcon,
} from "@heroicons/react/outline"
import { ChevronRightIcon, ExternalLinkIcon } from "@heroicons/react/solid"

const navigation = [
  { name: "Overview", href: "#overview" },
  { name: "Features", href: "#features" },
  { name: "Videos", href: "#videos" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
]

const features = [{
  name: "CI/CD",
  description: "Github Actions are used alongside Docker and Terraform to deploy the monorepo to multiple environments for development, staging and production.",
  icon: RefreshIcon
}, {
  name: "NextJS (React)",
  description: "NextJS is a framework built on top of React that brings best-in-class tooling to developers that want to deploy full-scale apps built on top of React. NextJS is quickly becoming a dominant standard in the industry.",
  icon: CodeIcon,
}, {
  name: "Credit Card Payments",
  description: "Allow customers to pay for NFTs without requiring a crypto wallet. Algomart takes care of the complexities of accepting off-chain payments, and creating on-chain NFTs.",
  icon: CreditCardIcon,
}, {
  name: "Cloud-friendly with Docker and Terraform",
  description: "By default, Algomart works with Google Cloud Platform (GCP) but can easily be deployed to other cloud providers thanks to the provided infrastructure-as-code templates.",
  icon: CloudUploadIcon,
}, {
  name: "Custodial Wallets",
  description: "Algomart creates a wallet on behalf of the user and secures it with a PIN, just like Coinbase and other custodial exchanges. This removes the need for a customer to create their own crypto wallet until they are ready.",
  icon: QrcodeIcon,
}, {
  name: "Lazy Minting",
  description: "NFTs are minted \"just in time\" to avoid unnecessary transactions and related costs. The assets are instead minted after purchase when a customer can claim their NFTs.",
  icon: ServerIcon,
}]

const caseStudies = [{
  title: "Promotional NFTs",
  href: "https://nft.drl.io",
  company: "Drone Racing League",
  imageUrl: "/drone-racing-league-nft-marketplace.jpg",
  description:
    "DRL is the world's premier professional drone racing property. Millions of fans watch the best drone pilots in the world compete in high-speed, highly competitive races broadcast on NBC, Twitter, and other international sports networks. DRL partnered with DEPT® to bring QR code-claimable NFTs to a promotional event, making them the first brand to take advantage of Algomart."
}, {
  title: "Le Mans Virtual",
  href: "https://nft.lemansvirtual.com",
  company: "Motorsport Games",
  imageUrl: "/lemans-virtual-nft-marketplace.jpg",
  description:
    "With a staggering audience of 81 million people, the 24H of Le Mans Virtual has established itself firmly as one of the pioneers of the fast-growing world of eSports Motorsport Games, the developers behind the virtual race, partnered with Algorand and DEPT® to launch an NFT marketplace to sell, auction, and promote iconic moments from the 2022 race as they happened."
}, {
  title: "SPIN Iconic Covers",
  href: "https://spinnft.xyz/",
  company: "SPIN Magazine",
  imageUrl: "/spin-magazine-nft-marketplace.jpg",
  description:
    "SPIN's iconic covers have been a collector's item since the magazine's first issue in 1985. In today's digital world, fans are looking to collect these pieces of culture in a new way: via NFTs. SPIN partnered with DEPT® to create a carbon-neutral NFT marketplace to sell or auction their covers and other media assets. In doing so, SPIN became the first major music media brand to make its full content archive available with NFTs."
}]

const social = [{
  name: "GitHub",
  href: "https://github.com/deptagency",
  icon: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}, {
  name: "Instagram",
  href: "https://www.instagram.com/deptagency",
  icon: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  )
}, {
  name: "Twitter",
  href: "https://twitter.com/deptagency",
  icon: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  )
}, {
  name: "Facebook",
  href: "https://www.facebook.com/DeptAgency",
  icon: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  )
}]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <Disclosure as="nav" className="bg-gray-900 sticky top-0 z-50">
        {({ isMobileMenuOpen }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {isMobileMenuOpen ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="https://github.com/deptagency/algomart" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">Algomart</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/algomart-logo.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href="https://github.com/deptagency/algomart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center px-4 py-1 text-base font-medium text-white bg-indigo-600 rounded-md"
                >
                  Get Started
                  <img
                    className="h-2 w-auto sm:h-10 pl-4 py-1"
                    src="/github-logo.svg"
                    alt="Github Logo"
                  />
                </a>
              </div>
            </div>

            <Disclosure.Panel>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="relative overflow-hidden">
        <main className="">
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Algomart</span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-400 sm:pb-5">
                        NFT Marketplace
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl mb-4">
                      A white-label, open source NFT marketplace built on the eco-friendly Algorand blockchain. If you need to own your code, start here.
                    </p>

                    <a
                      href="https://www.deptagency.com/en-us/careers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
                        We're hiring
                      </span>
                      <span className="ml-4 text-sm">
                        Visit our careers page
                      </span>
                      <ChevronRightIcon
                        className="ml-2 w-5 h-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature section with screenshot */}
          <a name="overview"></a>
          <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
                  Algomart
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Open source, white label: yours to own.
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                  Algomart is a fully-baked solution that allows you to have a completely functional NFT marketplace as your jumping off point. Get your MVP launched today, and iterate as you experiment with NFTs and the value it can bring your customers.
                </p>
                <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">You can try out the demo <a className="text-indigo-600" href="https://demo.algomart.dev/" target="_blank" rel="noopener noreferrer">here.</a></p>
              </div>
              <div className="mt-12">
                <img
                  className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                  src="/algomart-browse.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* hero section */}
          <div className="pb-16 bg-gradient-to-r from-blue-500 to-indigo-600 lg:pb-0 lg:z-10 lg:relative mt-8 lg:mt-32">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="hidden md:block mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="/launch-rocket.jpg"
                      alt="launch quickly"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8 pt-4 md:pt-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <p className="mt-6 text-2xl font-medium text-white">
                      Launch your project in weeks, not months. Our team of senior engineers and designers built Algomart so that you don't have to reinvent the wheel. Instead you can focus on the NFT strategy that your community wants.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Feature section with grid */}
          <a name="features"></a>
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
                Tech Stack
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Production-grade: Not Just a "Hello World"
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Algomart is a complete solution out-of-the-box, using cutting edge technologies for the typical cloud environments we see today.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md shadow-lg">
                              <feature.icon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* hero section */}
          <div className="my-4 pb-16 bg-gradient-to-r from-blue-500 to-indigo-600 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="/debit-card.jpg"
                      alt="Pay with credit and debit cards"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <p className="mt-6 text-2xl font-medium text-white">
                    Blending web2 and web3 technologies can be complex. Algomart handles this for you, giving you simple user registration, and the ability to pay with a credit card.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* video grid section */}
          <a name="videos"></a>
          <div className="relative bg-gray-50 py-16">
            <div className="relative">
              <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
                  Video series
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Learn the Basics
                </p>
                <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                  We've made a few short videos to help explain some of Algomart's key concepts, as well as related terminology and technology.
                </p>
              </div>

              <ul role="list" className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
              <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=qFibWdzgSAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
                  >
                    <img src="https://i.ytimg.com/vi_webp/qFibWdzgSAE/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">Developer Office Hours | AlgoMart</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">Developer Office Hours | AlgoMart</p>
                </li>
                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=aETlcu7PTr4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/aETlcu7PTr4/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">TL;DR Demo</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">TL;DR Demo</p>
                </li>

                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=0lBaWJErbx4&list=PLVrvLSnpG9tzDe3REVO6Zu3zu-FHckA55&index=5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/0lBaWJErbx4/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">What exactly is an NFT?</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">What exactly is an NFT?</p>
                </li>

                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=ujzWp3Ituo8&list=PLVrvLSnpG9tzDe3REVO6Zu3zu-FHckA55&index=6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/ujzWp3Ituo8/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">Why Care About NFTs At All?</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">Why Care About NFTs At All?</p>
                </li>

                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=PdbcCbvu6w8&list=PLVrvLSnpG9tzDe3REVO6Zu3zu-FHckA55&index=7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/PdbcCbvu6w8/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">What Is Actually Owned with NFTs?</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">What Is Actually Owned with NFTs?</p>
                </li>

                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=8yddkH1el9c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/8yddkH1el9c/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">Slightly in the weeds</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">Slightly in the weeds</p>
                </li>

                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=ex-hl9hQfZ8&list=PLVrvLSnpG9tzDe3REVO6Zu3zu-FHckA55&index=8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/ex-hl9hQfZ8/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">Understanding Royalties</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">Understanding Royalties</p>
                </li>

                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=IP1-cbGQaOU&list=PLVrvLSnpG9tzIlNhYtIGlGhmGcsU1eZZx&index=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/IP1-cbGQaOU/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">Metaverse vs. Blockchain</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">Metaverse vs. Blockchain</p>
                </li>

                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=YJnOTjR9WmE&list=PLVrvLSnpG9tzIlNhYtIGlGhmGcsU1eZZx&index=3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/YJnOTjR9WmE/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">Wallets</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">Wallets</p>
                </li>

                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=IMBOYZY0iOs&list=PLVrvLSnpG9tzIlNhYtIGlGhmGcsU1eZZx&index=4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/IMBOYZY0iOs/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">File storage on IPFS</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">File Storage on IPFS</p>
                </li>

                <li className="relative">
                  <a
                    href="https://www.youtube.com/watch?v=w-ElAmPYfxU&list=PLVrvLSnpG9tzIlNhYtIGlGhmGcsU1eZZx&index=5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                  >
                    <img src="https://i.ytimg.com/vi_webp/w-ElAmPYfxU/sddefault.webp" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">Algorand's ARC3 Spec</span>
                  </a>
                  <p className="block text-lg font-medium text-gray-900 pointer-events-none">Algorand's ARC3 Spec</p>
                </li>
              </ul>
            </div>
          </div>

          {/* case studies section */}
          <a name="case-studies"></a>
          <div className="relative bg-gray-50 py-16 sm:pb-24 lg:pb-32">
            <div className="relative">
              <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
                  Case Studies
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Algomart in the wild
                </p>
                <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                  Algomart has already been used by brands big and small to quickly get their NFT marketplaces launched in time for key marketing moments.
                </p>
              </div>
              <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                {caseStudies.map((study) => (
                  <a
                    href={study.href}
                    key={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-auto w-full object-cover"
                        src={study.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          {study.company}
                        </p>
                        <p className="text-xl font-semibold text-gray-900">
                          {study.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {study.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* contact dept section */}
          <a name="contact"></a>
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="/dept-rocket-next-chapter.jpg"
                alt="Rocket Insights is now DEPT®"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-800 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  Digital Products, End-to-End
                </h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                  We can build it
                </p>
                <p className="mt-3 text-lg text-gray-300">
                  DEPT&reg; is a full service digital agency. We've built <em>a lot of products</em> through our collective years. We're well versed on bringing a product to market that customers actually want, and as quickly as possible. Strategy, design, engineering and QA: we can build just about anything you want.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="https://www.deptagency.com/en-us/office/boston/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                      Get in touch
                      <ExternalLinkIcon
                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w mx-auto border-t border-gray-200 grid grid-cols-2 p-8">
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-base text-gray-400 text-right">
              &copy; 2022 DEPT&reg;
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
