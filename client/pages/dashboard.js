import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import { getMeApi } from "../api/user";

function dashboard() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const [tabs, setTabs] = useState(1);
    const router = useRouter();

    useEffect(() => {
        (async () => {
          const response = await getMeApi(logout);
          setUser(response || null);
        })();
    }, [auth]);

    
    if (user === undefined) return null;
    if (!auth && !user) {
        router.replace("/");
        return null;
    }

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
        </div>
    )
}

export default dashboard
