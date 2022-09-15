import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';
  
export default function Dashboard(props) {
  
    const { link } = usePage().props;
    const { data, setData, put, errors } = useForm({
        user_id: link.user_id || "",
        url: link.url || "",
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        put(route("links.update", link.id));
    }
  
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Link</h2>}
        >
            <Head title="Links" />
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("links.index") }
                                >
                                    Back
                                </Link>
                            </div>
  
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">User</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Name"
                                            name="name"
                                            value={link.users.name}
                                            readOnly = {true}
                                        />
                                        <input
                                            type="hidden"
                                            name="user_id"
                                            value={link.users.id}
                                        />
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Url</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="body"
                                            name="body"
                                            errors={errors.url}
                                            value={data.url}
                                            onChange={(e) =>
                                                setData("url", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.url}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
  
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}