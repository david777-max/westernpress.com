import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  ArrowRight,
  DollarSign,
  Shield,
  Clock,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  CreditCard,
} from "lucide-react";

/**
 * Fashion-forward, asymmetric, modern pricing page
 * - Glassy hero with collage of inclusive portraits (women-forward)
 * - Gradient blocks + subtle blobs
 * - Comparison cards, FAQ accordion, animated stats
 * - Ethical, transparent wording
 */

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const hero = {
    bg: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2400&auto=format&fit=crop", // soft studio gradient backdrop
    portraits: [
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUc-6N4qkhtxfER8wDE_I3-hCTG2erAaUIDA&s",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALEAuwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAABAwIEAwUCCwYDCQEAAAABAAIDBBEFEiExBiJBEzJRYXEUgQcjM0JSYpGhsdHwFSQ0csHhQ1OCJTZEY3OSs+LxCP/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAAmEQACAgIBAwUAAwEAAAAAAAAAAQIRAyExBBJBEyIyUWEFFEJx/9oADAMBAAIRAxEAPwAqvvlFhzO1ly+aRP2k05YxvkpkTo8PjuflDuo59qFYQtmho2MhjGbdTHAVDMvzevos/R1PtFjmVuyXJF7kCbpWx3HvSHKmH2iJ0LDzNLbX6arN8fcMQ1WF54cgnj5i4C7nabLQ4VL2r6ua2cNGVrUw9sJpnTSNffXRoOv5rn3bs6+Pu7e18HEKPCKg4i2CWN1yQDcarsuDYRBh1C0uysDWc19veqXD8LfLxE2eWOzg0OyDWwWmx2tp8GoHVla9xDNGRtO7vBo+l59B4albk3PkHXa3RX1vE9Pw7VQ1sx7OmDspZk+MmHXToADfXU+QtfoVTDTYvhjoy5stNVRXa5h7zTqCPu+5easdxCbFqh9TV6yfNjaeWNvgPDquk/A/xfliZw5ikmXLf2GV7u8NSY7+XT7Oic6adLtYt1EZWskOUR8TwmWgrZKaZp7Rp0I2c3ofT9dEUFCDYu6dF1XFsJp8ShAk0e35OUDVqx1dhFRhzndrHmZf5Rg5SuhGmeg6T+XWaCjJ1IqI4cvd2T7Y9U4BqlgI1UMSyNhxtT7GpppTrFYGQ80KRGo43T8YVi8yXE7ZSGqNEpUapoTyAlhEjLEXB0IWQx3gygq881M32ac/PjGhPmNv6rbMbfRFLDobIU4QmqkrJh6mWGVxdHDqrCMSoqgwy073OYM+eMXBFwPdqR9q1dMJqanjhc85mNGb16/et17PG2ohfJ3C7spB4tfy/iQfcslLSPjlex/eYS0+oSE+mjhft8jXV/y+SdRaK6vnZAy0Qs6+/gqOapc+Q5jmKl4vLlzBU9NXM7bK9t9d1Gq2eSUvBpsHl5Rm3VpWVQihzHaypsOMbpAG7HVMY5W5bxtdoEnny3o6nS4rdmu4Tmilw2pJNh2uQnw0CXhslRFW+xVTMzjfsndLLKfBxWOqKrEKA7SZZB7t/wCi6DXYeyqp439q6KWLmZKNNfNCimkdDuitPyVMHYUdViFdVSMjhZ3nu2AH3noub8V41V47iBlAeynaclPDe59fNx620A+/f1eHyYqJX1ZyUUbszrDvkdbKPhPC7HzCqqYg0bRxZdI2eHqev6vO5+EUox5bMRTcM1LML9pcwF7u6035fM+J/XpTso6qSr7OEPMwPL2QOYEbHyXbq3Du2pjBE0MBFr66DyXLOL4ccwarcMOoslNbNnsHE+d1uMZNmJSjR0jgrizFewZR8RUczS0hjawAEP8A5gNvUafgt3HNDPHmjc14K8v0HHuL0gDJzmte3Mbj3G4V9hnwhukeJKmOSJoOXtmAtA9bfrVOqeSK2rEpY8c3adHfJsLopjmkpYS47kNsftTP7Dw2/wDDN+0/msTgfEk9cxr6asc+IjxBWpjq6mWJpEh9+y0urX6acM0F89f9J4wfD2/8LH+velNw+iZ3KaEe5ZnEf22+QdliHZMv3GtFvwSxLV08GR9bLNLa5c4/kPwUfVr9K9PM18zTinpm/wCDH9gR9lTf5Mf/AGhYqrqq+NtonOkcdblxVDX4vxJE6QQQOcLfSP5rP9tfpP62R/7OoGkpH/4Q/wBIt+CL2CD5hc33rik/FXGFO6zIpvXs8wTtL8JXFFFd9ZQwVEY3BYWO+3+yJHql9tF+jmXxdnY3Ujo9RqB1SbLLcLfCThOOWhdno6i1zHPt7nDTwW0ZJDUBpNhcXDgd0dZb/QTyTjqaK2og7WNzbkXBFx0VfVYBUV87qqJ8UYls4sN7h1tfvur6WAs6ZmlM5HDY6LTakbb7lo4njXzr+Kz8cZdNdnitHjLbuIG5ULDaWNr80u6TyOkcrHHukWOHMdSU5lduQqmvk7WR4Lw1xBIurnEJQ2Agd0bLCYxWfGO5uq5iTyTPQY0sWOi74MxqLA8XfVzAiJpbHMR0adz+C7exkdXAyqglbJE8Zmlux/NeZ21Diyoj+kzN9il4FxdjHDl2YdWPbH/kyDMw+47JqONg3PR6KZD2jiz5jXX9SpLWZdFGweV1Th8E77Z5I2vdp1IU2ypIpyEFuiZnpo5W9nIzMDupbQkvYidujFmExr4OcGxCV0rIzTlxu4M7vuB2VFP8HIZTup4Ktwa5xdytGun9guly5sxTXZOf81Z39hFXLMHwrwhV4RXGVlXnp/nRZLXN9/JdBpH2b6aJIp3NBCXE3KQFlrySTTVD9UWtizDqFn6+uZES5ztdlZ4rKWRab2WHrpHVFSxvS+qzNhcOPVk2ux6gwyFs+JVIia42aLXLvcFWv43wST5KuZr5WP8ARQeIeApcdkfXMr39rlAjjc3lYPALFTcF4nS11sRpKuWIO+MdCLlwHgbFbUINbYOU8il7UmdHg4joKghrayLm0+MJb+ISsYkZLA6MxBxcNCNvLVcpOBYvHP8AuFJVhhPK1419/QrpXCXD+JS4Yw17OxLuVzHggt3BsNvf4G6HkxdquMrC481upRoo6Gi9mfOQzYWvb6Vv/X7Vt+Ca+ugjnfJK6SnDgGRE6Cwtp6qrrqN9I6XtBdxLnP8AUnlHuFvsV9R0/sVFFAN7XN/16IPTObzUma6txWHfk22G4nHOzQ795hGoU+0Dtb7+SxFK4tAc02LRYFWDcSqGtALWG3U7rtJnDU2uDnGIR3lJOwUWlj53SHYbKdXwue9t9imZI2xWyu5barn9VOlQTosXfMqOIqtsdNlb3zosLWSh72236q54lr+0qCG7N0WdkN+bxVdNjpWzo55X7UP0jh7Q2+ziWqLUkh5adwTdON2Fkis1eHjZwumorYtN+09TcNuz4JQnxp4z9wVrZZn4PKn2rhLC5Dv7O1vvGn9FpwgfYT6AGo3MSmpYW4mWQpY7FHGE7ON00021VeTXKDeE0Wpx0lzbxRLPkiKPH/4c2WZooRM/m3DlpscN4SFR4ay1RceKFPkexP2F1QsdAAx2oOoKmOFhfxTlNHnjGbdOOiygrdaANpsqp4Wvd3VaYTTtsc3dGpUYs5zdS66aOiwiSRxs6QZSfAdfu/FRJJWZyPSijOV0PtuKM+gXGQnxsSlVsgkkLx3baJ2jvDh00shu90pAd9Uk2/Xmokj2uN8ynS40rn9i3V5G6h9EymcG77OFijcSHHK7ToozX8gR50+jnNlLJHma8qixaobBTyvG+Wy0uIFscVvJYXiae1K4N2JXIzXPJR2OliseOzF4lL2kpLtySmXaRgeKRVOvKB5pTxzNT6VJIA5W2HGL6eCjuN3ZfNSWbO9FHjbnqo2fSeAtIqR6I+DX4jh2lg+oCtuDyBZDhuP2fD6Zv0WD8FqqeTOwJOE7sZnGqHQlAogkSPyIt0CCm1NklrOUqHT4hFNUuhzWeNmu+d6KeDoovc7LaceQmNadG7jdG6O7T6JEmVJhqWglt3eqvSK2+CoxaLMMqo6amlbiTSNjYLT1NRB2mgzHqkwMjfIHMY1tjdYaTYeGRxjwTYIskbc29kmVqkt7ibe1E8Ae7ZHgh7SQDe5sqPiWY19ezDojeFnfPkPzP9Ff1cgw+je4fLSAho+iFnDEYXFz3ZpZNXFBn7n6a5LU1H3vgOplzU80begGX3A2VGJXMfzKwrXdnFe252VcG5nPbmtGWlzAdvG3l/ZORSiqQhOTk7Y7FValK9oVUczHnlSu1RELscxaW1M530isHxI/OyLmW3xvSIX+auc45P2jWluzbrnRXdM6yfbjooeV9QT4FLn+UHokQNuxzvrIOHxqcAp+RbhZjz4hDCG5sUph/wAxpQJ+JKXhPLicJ8HgrP8AlhGrkj0dhAb7NF/KPwVrA7I/Xunb1VJgUmeih/lCvGgFgB2O650XTGZ8k2ORB7M5UWBxDsrumym35QmYuwElRAqsPjmjtYh18zbdCqn2/EqGRzZG9vENDYcw/NaW99ExVU7ZW5xYOGlzsQiJJBMWVXU1aKIcQ0sh7N7zBIdLSgs+y+h9yNtQBmDHF2YbJOJ4U6fQMFjpbcLMVvDJls1tO0m2hyqpJ+NnQhh6ea06NE+dsRzTzwsb9KRwFvvVnhxZM0PYXFvRwGh9Fj8J4Mgp5xLVRtMm4ZbZbilaIo2tDbNaLAIfHgSzqEXUXZJD8gR57jMe4Nb+Kbkc0AF+l9go73udzu5WjYdFuUu1CjfgiV9S98hcfQDwVbI7NqN+ql1DHyPJy6qJ2Lg8lTHGt+QM5XrwRapudnuVeGXbbwKuJIM4KZFIj2CoqXw3Tfszvoq9bR/VTnsP1VuyuxGD4wxJtNTSNPfJsFz+umz0zc25bdSuKcWdiVe4h3xeY2Cqql122zbBAxxrY3J+BI+RA8AmpHWeB5I3vu1oGyQ4fGH1Rq2YvQ98xO0JyVkR8E275NiXAP3hqw+GMxR3bg+o7TD4hm2C1kDlz/gyTLRxjyW3p5OVq57jQWeywIzahPQSZhldv4KOx+iF7OB8CtRlQOrJ1kl7dCjgfmCU7VNppoGyunLmFRnVLm6KwqGXuFE9je9w0vrssNBE1WyNFI58mu11NLxCzUXedm/mrPDMKZCM8wu87DoE3PhbYXvmj5mk3N9x+a2sbqwGTKnpEKKMv55Td3n0RyDNyt2T4aldmp6flg7IBhSDB9VWfZIuyW1EorfZ/qpTab6qsBGldmrSMkAUyX7Op7WJXZrdFHkAHNK1wN9NUmd26OIARuzbhNzG9ldG7E30Ce2e4eIuo4T17lp8gFGSI48/FsUmkbnkZZRXHI71KmYc395a33oU+BnHydR4ZmtTR20IFitrRTfFjmXP8DdkY3rotdQTXIG2myUkhg0kMiW96rYnqQ6XlCCyqLCnftZShUhujmZlUUU93keKmSu0C3GTS0YlDZYx5ZRfLbyUynDWi2VRaCPNGCVLkbbK1uxNkzBtq2LTq6JTdkd0lmjQ1R6mfsZoW9HktKZ7qWwFW6RCxZpowamJt4wfjB9HzCXh/Z1cQezqrJzWyRlrxdpFiD1WQxiCswGpNVh+cUjjdwGojPmPD8EeMYz15AznKG/BqDSfWTbqVygYJxDDiBbDJaKfw6O9Fegocsbg6aCRyKatFcYnN+ahkVjZIdE12qqiyEGI8qkOjsLpFlCHjFzrudl2GiZedUbToUl26iNths3HqnuqZb3h6py93k+dlTLiOTNzAu96tuH4faq5jCbZha6rLXDD0c234hXnBOuN0zPHMFh7VB4+3Zt4KafDnsbO3kI5X9HK9o5WuYLO1V9Q0cFbh4p6uMOjdtY6hU+IcPVeGSl9Pmmp+lhct9UPLhpX4NYsym6emTqeaws7Q+PiprH3FlAwammrnCNkTiCbON9vetlh2ARwNvO7O77glVjcnSDznGHJV0eDVctpWFjWnUXVhHhk8bgZSHWPRXlPCIxlHdGyeITMOmVbFJdRJsiUkWRqk5UMtkAUaMFHQByt2KGihYrTmWEFu7DcKcEThcELTSaopOnYxRPMlO0nfqn3sDmkOAIIsQUzSjLnH1ynypHSJLbOc8TYf+ycRDoLtgl54rbNI3H5evktXwviwxPD2lx+Oj5ZAfHx96VxXQsr8DqmEWdEwyMd4OaL/mFzHAcbkw+oZV077sdo8ePqn4r1sX6hBv0cn4ztF0FEoKplXSMnZ3XtBCejku4t8Em006Y6mmrQ6UjK1Bx0KQH6KizxKNwl2ubou6bIzuqNIIaPRjSx8Ukd5LaFRaHz3G+v5f3VlgDzDjVORuJBY+R/+quaRkY4i4DrW8VZ4Wz/AGhSPzXvI3XyDght0xhbR6G4YDpw1m0lrrYU1KIW6jM4732VDg9JDRydjlOYah3VaCJzm6SAHwcEw3oSXI4Imt5WBrQelkR5E4Cic2+iG4m7Aw5tUsKLCx0TnNPM0m7SnwVIv7I0Ksm7c6cuiKtlBhFJYAk7WRhE7U2UIN0wyxi+5Nz6p5E0WFkaiVEYl7Q5pa4XBFiFx7jnB4uHMSjdSHJTVmZzGfQcLXA8tQuxFZzjfhuLiHDBHtPC4vide1ijYMnZNAM+PviZ74OeIQ4fsmqdzAF0J8W+H68Vu28ri4bLz1UGuwfESyVroaylkBN9PQ+9dl4Mxc4vhLKh5zOtqj9RiXziB6fI/gy6kmu8huyca7lCgh/O71Upp5QlqGrPGkn8TJ/OfxRW5ig3vX8SSjPdPp/VDfIZLQ2OvonG90+aQAnGDmKplx5HmMzUR+q/8le4ax7KmBzQS9krhZm50Kf4RwePE5Y4ZHMDJJ2MGpJb1JsBsNPtV/w5h7YJ4KgND2Plu19st2l5YSPcQlcuRJ0O4cVps7e5oD2SNBDS0W89Fa09RmDW5eiigOqQwRtsxrRqfJSIYnMsnl8Uc2XLJQa4G+9+nglgomO0SlksJCyMolCBAI0EXVUQUEaIIXVkDQQQUIBE7YoyiBUIc7+Fzh/2vC24zSx/vVG09oB8+Lr9ne9xWR+CjiD2StlwqV12T88J8+q7dPG2aJ8T2hzHtLSDsQV5p4swyp4J4tywXETH9vSP8WHp6jb0t4pzBPui8b4FMsKl3o767lePMXUlruUKg4exdmM4PBVZrlzQSPAq5a/lCDNU6CQlaPHrOv68Up3cCJBLscQTd2eqfp++fVBBUyQ5NpwN/Dyek/8A42rXcO/wuCfyzfgEEFz8/wAjpYPiztdJ8gxA98oILpx4RyJcsdj2S0EFZA0hveKCCogpIHfQQWWQWiQQWiBhGggoQIoDZBBQgkrjf/6C+Swf/rP/AARoI2H5IFk4Hfgj/wB3v9ZXQG90IILeX5AcZ//Z",
    ],
  };

  const faqs = [
    {
      question: "Is this legal?",
      answer:
        "Yes. Our performance-based recruitment model complies with applicable employment and recruiting regulations. We operate under Westernpress and use attorney-reviewed agreements similar to contingency recruiting models common in tech, sales, and staffing.",
    },
    {
      question: "What if I don't get hired?",
      answer:
        "If you don’t receive a job offer within 60 days, you pay nothing. There are no upfront fees, application costs, or penalties.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Primarily U.S. opportunities. We prioritize candidates authorized to work in the United States (e.g., citizens, permanent residents, valid EAD/H-1B, etc.). If you’re outside the U.S., ask us—some roles can be remote-friendly.",
    },
    
    {
      question: "What if I want to change jobs after being placed?",
      answer:
        "You’re free to change anytime. Our agreement covers the initial placement only. If you want help finding the next role fast, we can sign a fresh agreement.",
    },
    {
      question: "Do you guarantee a specific salary?",
      answer:
        "No fixed numbers. We target roles aligned with your stack, seniority, and market. We’ll push for the best outcome and advise on compensation strategy.",
    },
  ];

  const benefits = [
    "No upfront fees or costs",
    "20–50 curated applications daily",
    "Human + AI job matching",
    "Interview prep & on-call coaching",
    "Salary negotiation assistance",
    "Contract review & guidance",
    "Dedicated specialist team",
    "60-day placement guarantee",
  ];

  const traditionalAgencyDrawbacks = [
    "Upfront retainers or placement fees",
    "Limited daily applications",
    "Generic matching",
    "Basic interview guidance",
    "Minimal negotiation support",
    "Standard boilerplate contracts",
    "Shared recruiter bandwidth",
    "Little to no guarantees",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* BG Image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.bg})` }}
          aria-hidden
        />
        {/* Overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/90 via-white/80 to-white dark:from-gray-950/70 dark:via-gray-950/85 dark:to-gray-950" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />

        <div className="container-custom">
          <div className="grid items-center gap-10 pt-20 pb-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-sm text-gray-800 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-200">
                <Sparkles className="h-4 w-4" />
                Pay only when you’re hired
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white">
                Only Pay When{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  You’re Hired
                </span>
              </h1>

              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                100% performance-based. No upfront fees. No hidden costs. Just a
                transparent split while your initial contract is active—then it’s
                all yours.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/get-started"
                  className="group inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>
                <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/60 bg-emerald-50/60 px-4 py-3 text-emerald-700 backdrop-blur dark:border-emerald-700/60 dark:bg-emerald-900/30 dark:text-emerald-300">
                  <ShieldCheck className="h-5 w-5" />
                  60-Day Success Guarantee
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Avg. 15 days to offer
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" /> Aligned incentives
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" /> $0 upfront
                </div>
              </div>
            </div>

            {/* Collage Card */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/50 bg-white/60 p-4 shadow-2xl backdrop-blur dark:border-gray-800/60 dark:bg-gray-900/50">
                <div className="grid grid-cols-3 gap-3">
                  {hero.portraits.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Professional portrait"
                      loading="lazy"
                      className="h-40 w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-gray-200 bg-white/90 p-4 text-sm shadow-md backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      “Offer accepted” 🎉
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      20% fee active → ends at contract end
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING MODEL */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
              Our 80/20 model aligns outcomes. You keep the majority; we win when you do.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* You Keep */}
            <div className="rounded-2xl border-2 border-emerald-400 bg-white p-8 text-center shadow-sm dark:border-emerald-700 dark:bg-gray-950">
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
                <span className="text-2xl font-bold">80%</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                You Keep
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                80% of your salary paid directly to you while the initial contract is active.
              </p>
              <ul className="space-y-2 text-left">
                {["Your money, your control", "Immediate access to funds", "No extra deductions"].map(
                  (t, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* We Earn */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                <span className="text-2xl font-bold">20%</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                We Earn
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Performance-based only.</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Clock className="mr-2 h-4 w-4 text-blue-600" />
                  Applies only during the initial contract.
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <DollarSign className="mr-2 h-4 w-4 text-blue-600" />
                  No retainers or upfront fees.
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Shield className="mr-2 h-4 w-4 text-blue-600" />
                  Clear terms, no surprises.
                </li>
              </ul>
            </div>

            {/* After Contract End */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 p-8 text-center shadow-sm dark:from-emerald-900/20 dark:to-blue-900/20">
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white">
                <span className="text-xl font-bold">100%</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Then You Keep
              </h3>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                100% of your salary after the initial contract ends—forever.
              </p>
              <ul className="space-y-2 text-left">
                {["No ongoing fees", "Complete salary ownership", "Freedom to switch roles"].map(
                  (t, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle className="mr-2 h-4 w-4 text-emerald-600" />
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Example Calculation */}
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8 shadow-sm dark:border-blue-900/40 dark:bg-blue-900/20">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
              Example: $150K Annual Salary
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-emerald-600">$10,000</div>
                <div className="text-gray-700 dark:text-gray-300">Your Monthly Take-Home</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">~80%</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-blue-600">$2,500</div>
                <div className="text-gray-700 dark:text-gray-300">Our Monthly Share</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">~20% while active</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-gray-700 dark:text-gray-300">After Contract End</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">All yours</div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
              Figures are simplified illustrations; taxes/benefits vary by location and employer.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              How We Compare
            </h2>
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
              Why our performance model feels modern—and fair.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Our Service */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                Westernpress Tech Talent
              </h3>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 opacity-90 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                Traditional Agencies
              </h3>
              <ul className="space-y-3">
                {traditionalAgencyDrawbacks.map((d, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <XCircle className="mr-3 h-5 w-5 flex-shrink-0 text-red-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
              The details—clear and simple.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-900/60"
                >
                  <span className="pr-6 font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <HelpCircle
                    className={`h-5 w-5 flex-shrink-0 text-blue-600 transition-transform duration-200 dark:text-blue-400 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Earning More?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">
            No upfront costs. No risk. We only succeed when you do.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 shadow-md transition hover:bg-gray-100"
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center rounded-xl border border-white/80 px-6 py-3 font-medium text-white/95 backdrop-blur transition hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-4 text-sm opacity-80">Available 24/7 worldwide</p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
