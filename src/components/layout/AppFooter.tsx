export function AppFooter() {
    return (
        <footer className="border-t border-line bg-surface">
            <div className="mx-auto flex max-w-7xl items-start justify-between gap-4 px-4 py-6 text-sm text-muted sm:px-6 lg:px-8">
                <div className="space-y-1 text-left">
                    <p className="font-medium text-ink">Tabacchi Ci Catalog</p>
                    <p>Tel: +39 081 123 4567</p>
                    <p>Via Roma 123, 80045 Pompei (NA)</p>
                </div>

                <div className="flex shrink-0 items-start">
                    <a
                        className="font-medium text-brand-700 transition hover:text-brand-500"
                        href="https://www.instagram.com/tabacchici_pompei?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        rel="noreferrer"
                        target="_blank"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}
