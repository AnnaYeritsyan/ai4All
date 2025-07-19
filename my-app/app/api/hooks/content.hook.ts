'use client'
import { useSuspenseQuery, useQuery} from "@tanstack/react-query";
import { Alldata_Api, api_url } from "../api";



export function useHeader(locale: string) {
  return useQuery ({
    queryKey: ['Header', locale],
    queryFn: async () => {
      const response = await fetch(`${api_url}/header?populate=*&locale=${locale}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    },
    staleTime: 60 * 60 * 1000,
   
  });
}

export function useFooter(locale: string) {
  return useQuery ({
    queryKey: ['Footer', locale],
    queryFn: async () => {
      const response = await fetch(`${api_url}/footer?populate=*&locale=${locale}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useFooter_Page(locale: string) {
  return useQuery({
    queryKey: ["FooterData"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/footer${Alldata_Api}&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching footer data :", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useNot_Found_Page(locale: string) {
  return useQuery({
    queryKey: ["NotFoundData"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/not-found${Alldata_Api}&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useNews_page(locale: string) {
  return useSuspenseQuery({
    queryKey: ["News"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/news-page?populate=news.image&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useSales_page(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Sales"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/sales-page?populate[sales][populate][0]=image&populate[sales][populate][1]=tables&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}


export function useDoctors_appointments(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Doctor appointments"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/doctors-appointment?populate=doctors.image&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}


export function useAnalyses_page(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Analyses page anlyses"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/analyses-page?populate=analyses_list.analyse_list_item&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}
export function useAnalyses_page_Genetic(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Genetic analyses"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/analyses-page?populate=genetic_analyses.genetic_item.details&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}



export function useQuestion(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Answer and question"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/question?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}


export function useAddress(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Address"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/address?populate[contact_sales][populate][0]=image&populate[address_item][populate][0]=working_days&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}


export function useVisit_home(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Visit home"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/home-visit?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}



export function useComing_soon(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Coming soon"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/coming-soon?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}


export function usePrivacy_policy(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Privacy policy"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/privacy-policy?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useJobs(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Jobs"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/jobs-page?populate=bgImage&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}


export function useAbout_us(locale: string) {
  return useSuspenseQuery({
    queryKey: ["About us"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/about-us?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}



export function usePartners(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Partners"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/partners-section?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}


export function useDoctors(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Doctors"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/doctors-page?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useOrganization(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Organization"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/organization?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useEurolab_blog(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Eurolab blog"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/eurolab-blog?populate[0]=image&populate[1]=Blogs.image&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}


export function useCurrent_offer(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Current offer"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/current-offer?populate=offers.current_offers_tables&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useRegister_modal(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Register modal"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/register-modal?populate=image&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useHome_planing_section(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Planing section"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/home-planing-section?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useHome_checkUp_program(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Home check up program"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/home-check-up-program?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}


export function useHome_online_consultation(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Home online consultation"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/home-online-consultation?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useHome_contact(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Home contact"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/home-contact?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useHome_header(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Home header"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/home-header?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}
export function useLogin(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Login"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/login?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useBasket(locale: string) {
  return useSuspenseQuery({
    queryKey: ["Basket"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/basket?populate=*&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}
export function useMedServices(locale: string) {
  return useSuspenseQuery({
    queryKey: ["MedServices"],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/med-services-page?populate=services&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}

export function useCombined_search(query:string,locale: string) {
  return useSuspenseQuery({
    queryKey: ["Combined search", query, locale],
    queryFn: async () => {
      try {
        const response = await fetch(`${api_url}/combined-search?query=${query}&locale=${locale}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      } catch (error) {
        console.error("Error fetching not found:", error);
        return null;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
}