import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RiArrowDropDownLine } from "react-icons/ri";

// Navigation Data
const navigation = [
  { name: "Home", to: "/" },
  { name: "Our Heritage", to: "/ourheritage" },
  { name: "Our Team", to: "/ourTeam" },
  { name: "Market Reports", to: "/marketReports" },

  {
    name: "Statistics",
    children: [
      { name: "Awaiting Sales Offerings", to: "/statistics/awaitingSalesOfferings" },
      { name: "Weekly Sales Averages", to: "/statistics/weeklySalesAverages" },
      {
        name: "Sold Quantity & Averages",
        children: [
          { name: "Weekly Sold Quantity & Averages", to: "/statistics/soldQuantity&Averages/weekly" },
          { name: "Monthly Sold Quantity & Averages", to: "/statistics/soldQuantity&Averages/monthly" },
        ],
      },
      { name: "Monthly Production", to: "/statistics/monthlyProduction" },
      {
        name: "Exports",
        children: [
          { name: "Exports Country-Wise", to: "/statistics/export/country-wise" },
        ],
      },
    ],
  },

  { name: "Financial Reports", to: "/financialReports" },

  {
    name: "News",
    children: [
      { name: "Our Latest", to: "/news/ourLatest" },
      { name: "Local Tea News", to: "/news/localTeaNews" },
      { name: "International", to: "/news/internationalNews" },
    ],
  },

  { name: "Regulations", to: "/regulations" },

  {
    name: "Login",
    children: [
      { name: "SL Tea Auction Login", to: "https://ceylonteabrokers.com/", external: true, },
      { name: "EDO Buyer Login", to: "https://ceylonteabrokers.com/", external: true, },
      { name: "TB BOSS Login", to: "https://ceylonteabrokers.com/", external: true, },
      { name: "State Dash Login", to: "https://ceylonteabrokers.com/", external: true, },
      { name: "SCS Login", to: "https://ceylonteabrokers.com/", external: true, },
      { name: "PTC Login", to: "https://ceylonteabrokers.com/", external: true, },
      { name: "HelpDesk Login", to: "https://ceylonteabrokers.com/", external: true, },
    ],
  },

  { name: "Contact", to: "/contact" },
];

// ================= COMPONENT =================
export default function Header() {
  const location = useLocation();

  const navLinkClass = (path) =>
    `px-3 py-2 text-sm font-medium transition-all ${
      location.pathname === path
        ? "text-white underline text-bold underline-offset-4 bg-gray-700/30 rounded-lg"
        : "text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg"
    }`;

  return (
    <Disclosure as="nav" className="w-full backdrop-blur-2xl border-b-1 sticky top-0 z-[9999] shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">

              
              <div> 
                <img 
                  src="/ctb_logo.webp" 
                  alt="logo" 
                  className='absolute relative w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] mt-8 lg:mt-0' 
                />
              </div>

              {/* DESKTOP MENU */}
              <div className="hidden lg:flex space-x-4 font-semibold">
                {navigation.map((item, index) => (
                  <div key={index} className="relative group">

                    {!item.children ? (
                      <Link to={item.to} className={navLinkClass(item.to)}>
                        {item.name}
                      </Link>
                    ) : (
                      <span className="px-3 py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                        {item.name}
                      </span>
                    )}

                    {/* DROPDOWN */}
                    {item.children && (
                      <div className="absolute font-semibold left-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">

                        {item.children.map((sub, i) => (
                          <div key={i} className="relative group/sub">

                            {/* NORMAL OR EXTERNAL LINK */}
                            {!sub.children ? (
                              sub.external ? (
                                <a
                                  href={sub.to}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                                >
                                  {sub.name}
                                </a>
                              ) : (
                                <Link
                                  to={sub.to}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                                >
                                  {sub.name}
                                </Link>
                              )
                            ) : (
                              <>
                                <div className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer flex flex-row justify-between">
                                  {sub.name} <RiArrowDropDownLine className="size-5"/>
                                </div>

                                {/* NESTED DROPDOWN */}
                                <div className="absolute left-full top-0 w-64 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover/sub:visible group-hover/sub:opacity-100 transition-all">

                                  {sub.children.map((child, j) => (
                                    <Link
                                      key={j}
                                      to={child.to}
                                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* MOBILE BUTTON */}
              <div className="lg:hidden">
                <Disclosure.Button className="text-gray-300 hover:text-white mt-7 flex">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <Disclosure.Panel className="lg:hidden w-full fixed top-16 left-0 z-[9999] bg-gray-950 px-4 pb-4 space-y-1">
            {navigation.map((item, index) => (
              <MobileItem key={index} item={item} />
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

// ================= MOBILE ITEM =================
function MobileItem({ item }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return item.external ? (
      <a
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-gray-300 text-[11px] font-semibold px-2 py-2 rounded hover:bg-gray-700"
      >
        {item.name}
      </a>
    ) : (
      <Link
        to={item.to}
        className="block text-gray-200 text-[11px] font-semibold px-2 py-2 rounded hover:bg-gray-700"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between text-gray-200 text-[11px] font-semibold px-2 py-2 rounded hover:bg-gray-700"
      >
        {item.name}
        <span>{open ? "^" : "+"}</span>
      </button>

      {open && (
        <div className="ml-4 border-l border-gray-200 pl-3">
          {item.children.map((sub, index) => (
            <MobileItem key={index} item={sub} />
          ))}
        </div>
      )}
    </div>
  );
}