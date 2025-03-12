'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

const LanguageSwitcher = () => {
    const pathname = usePathname();
    const params = useParams();
    const locale = params?.locale as string || 'ar';

    // Define the new locale (toggle between 'en' and 'ar')
    const newLocale = locale === 'ar' ? 'en' : 'ar';

    // Correct the href by replacing the locale in the pathname
    const newPathname = `/${newLocale}${pathname.replace(/^\/(ar|en)/, '')}`;

    return (
        <Link href={newPathname} className="btn-fifteen tran3s">
            {locale === 'en' ? 'العربية' : 'English'}
        </Link>
    );
};

export default LanguageSwitcher;
