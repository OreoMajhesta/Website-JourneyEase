import { useNavigate, useLocation } from 'react-router-dom';

export default function useHandleLinkClick() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLinkClick = (path: string, scrollTo?: string) => {
        if (path === "back") {
            navigate(-1);
        } else if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate(path);
            if (scrollTo) {
                setTimeout(() => {
                    const section = document.getElementById(scrollTo);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 200);
            }
        }
    };

    return handleLinkClick;
}
