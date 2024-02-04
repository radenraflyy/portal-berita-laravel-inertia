import NewsListCard from "@/Components/Dashboard/NewsList";
import NewsNotFound from "@/Components/Dashboard/NewsNotFound";
import Pagination from "@/Components/Dashboard/pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, news }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white flex justify-center flex-wrap gap-y-5">
                            {news?.data?.newsData?.length ? (
                                <NewsListCard news={news?.data?.newsData} />
                            ) : (
                                <NewsNotFound />
                            )}
                        </div>
                        <div className="flex justify-center items-center mb-5">
                            <Pagination meta={news?.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
