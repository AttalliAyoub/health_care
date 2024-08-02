import { useEffect, useState } from "react";

export const BASEURL =
  "https://fedskillstest.coalitiontechnologies.workers.dev";

const auth_key = btoa(`coalition:skills-test`);

export interface UseFetchArgs<T> {
  url?: string,
  config?: RequestInit,
  defaultValue?: T,
  transform?: (data: any) => T,
}

const defaultArgs = <T>(): UseFetchArgs<T> => ({
  url: BASEURL,
  config: {
    method: "GET",
    redirect: "follow",
    headers: {
      Authorization: `Basic ${auth_key}`,
    },
  },
});

export const useFetch = <T, E>(args?: UseFetchArgs<T>) => {
  const default_args = { ...defaultArgs<T>(), ...args };
  const { url, defaultValue, config, transform } = default_args;
  const [data, setData] = useState<T | null>(defaultValue ?? null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<E | null>(null);

  const fetchData = async () => {
    if (!defaultValue) setIsPending(true);
    try {
      const response = await fetch(url!, config);
      const json = await response.json();
      if (!response.ok) throw json;
      const result = transform ? transform(json) : json;
      setData(result);
      setError(null);
    } catch (error: any) {
      setError(error);
    }
    setIsPending(false);
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(config)]);
  return { data, isPending, error };
};

export default useFetch;
