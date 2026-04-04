type AppFooterProps = {
    contactLabel: string;
};

export function AppFooter({ contactLabel }: AppFooterProps) {
    return (
        <footer className="border-t border-line bg-surface">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-6 text-sm text-muted sm:px-6 md:flex-row md:items-start lg:px-8">
                <div className="space-y-1 text-left">
                    <p className="font-medium text-ink">Tabacchi Ci Catalog</p>
                    <p>Via Piave 4, 80045 Pompei (Na)</p>
                </div>

                <div className="space-y-2 text-left md:text-right">
                    <p className="font-medium text-ink">{contactLabel}</p>
                    <p>Tel: +39 081 863 9034</p>

                    <div className="flex flex-wrap items-center gap-4 md:justify-end">
                        <a
                            className="font-medium text-brand-700 transition hover:text-brand-500"
                            href="https://www.instagram.com/tabacchici_pompei?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            rel="noreferrer"
                            target="_blank"
                        >
                            Instagram
                        </a>

                        <a
                            className="font-medium text-brand-700 transition hover:text-brand-500"
                            href="https://www.facebook.com/share/18UUykjepa/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}