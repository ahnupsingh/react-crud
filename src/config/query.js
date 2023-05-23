const employeesQueryConfig = {
    cacheTime: 5 * 60 * 1000, // 5 minutes
    staleTime: 0 * 60 * 1000, // 0 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: false,
    enabled: true,
};

export {employeesQueryConfig};