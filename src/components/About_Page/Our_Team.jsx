import React from 'react';

const Our_Team = () => {
    return (
        <>
            <div className='my-7 text-center'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider text-4xl font-bold text-primary">Meet our team</div>
                </div>
                <p className='text-xs font-bold'>we are always ready to be at your service, and we value your time and money</p>
            </div>
            <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-7'>
                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>

                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>

                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>

                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>

                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>

                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAwgMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIDBQYHBAj/xAA3EAACAQMBBQcCAwcFAAAAAAAAAQIDBBEFBhIhMUEHEyJRYXGBMpEUsbI2QlJiocHwFSR0dfH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB0RAQADAAIDAQAAAAAAAAAAAAABAhEhMQMyUSL/2gAMAwEAAhEDEQA/APYUZIiMkEUEAFBCgAAAAAFIA3hNvkubAoMYyUlmLTXmigUEAFIAAIGyZAoJkZAMwkjIjAwBQBsRSIuQAZC5AIAAAABQQPkBwO2e0tLZnSZXLiqtzUe5b0m+Epeb9F1PENQ2j1bXrj/dX1xWqSl4aUZNQXtFcP7+pzPbDqyudpHbRm3G2pKmvRvxP78Pscf2Z0KD16Fxd1KdOnSg2t+WPE+CX5nG9sd6U199nb7Y6Ppyv7e5vKVGnNONFTclu8ctxzjy+56XsHtYto7OVK53I39FJ1FD6akf4l/dH3Xd3aW1BfiK1OCmsRUv3vg8u1acNj9srHWdPkv9PuJtzjDkv44/KeUvNGKX55bv44x7cDGE41IRnBqUZLKa6op6XlUjBAAIAKQAARlIwIAAMwCAUEAFyVECAoGRkAarmvTt6FStWeKcItyb6JczacPtbQrXOz2oUrRpV3QluZ6tLJJ6WO351166Wo63d3cst168pRT8m+B6bsdspRttNhfV7qqpzg3OkpeHPt1PIdYo3FCvXk5pbk/C4y3sv3R7DstqlPX9nqDsrnublY3kknh9YtM8vk3Nezx5uS7JV0+21jTKFGvcSju8pU6mHwfXB0rtct6Nro2m21OUpzjctxcpbzaUXn80d3stPuaUEpVJUoZzU3XF956fSse55X2l6rR1PaenZWku8pWFKUZuPFb7w5cfTCXuSkct3yIex7Czqz2R0qVaqqkvw8VvJ/57HOnRux3UIXeyMaCypW1accPybzw+7R3k9cdPBMZKNkKyFQIAAAAAAAQAAZAEAoIAKUxKBQQAVs6R2i7T2djot5b2t9SV99EqcZZnBPg3j/OJ23Urp2VjWuVRqVu7jnu6S8UvY6RrGxNDaN3l87irQrVpKSlFcFwW9Fpc1w9eOTNvkN1+y8QqXSuqWJRzHOceS9fU+zYitK22go0oVZ01cNQjjhx6DaHQ7vSNZradiOYfVOHCLXmfDTpVKTjONVxqUpJw3Pqynzyc5iJjHXnXv9xQvaWnVVXr1XJQeFnnw9DwK0o3cLqFOUKlL8TFw8UWt5N/llH6AsdYtNoNHpTtKqlNQXeQb8Sfr78TqWubH3uoaFGFoou5tbidWlCXNxbfhT+Xw9jFYyZiG7TsRMu69n+gQ0HR6dH9+WZP5x/U7SzoXZPrlTUdPutPvJ1JXllNcKmW1Ta4cevFSXwd7Z3r6vNb2kbIUjNMhAQCggAoIAKCADIhTEgoICilIAKUgAlT6GufoY0qUYUlGk1FLkuhm+T9hReEs8mFeA9pljeadtZVjUjONC5xOhNvKlHqs+jOq2kI05qjWkqblLHeS5cXzPe+1DTKGo7N1JVIZrWz72lLHFPr90fn+4h3sHlrejwTa8/M42jJeis7DvvZan/r9uqVXjcW1RTpv+SX/v2R6jtHG6t9n5QtJOnOdTFSvFZlRpt+KSXnj7c+h0HsR0So69TVKtWMqVtGVGlBRw96WG3nrw/M9hqU41acoySaa4rzN1rw53tkuv7JbMWmztGo7dznWuMOrOcs5xy/M56XM12ls7WPdRblSX0Jv6V5extmaiMhi07OsGQpCsowCACkAFBABQQAZNkAIoCAIoIAMimIKKKaWcdUQj5hWjW7B6hptWgniUlwfn6HnOy+wNqqnf6jRjUTUlOhVipLOVh/GGvk9SpSbjh8Trd3SurDWO8acqNVtxmsv1w+i9jN87dPHEzxrldD0my0Wz/DadSdKjvOW7vNpN+WeRycGsny0ZqUODXLK9TbCXFNcjTnLZvxjnPQxypTfHgkaa1WEVKbklGP1PPIxs68a29OPFdcdPIGNjRDZU5ZXI1BAAgBgECsgQBFBCAZkMcouSACEyBkEY5KmBkCFKKSXLgCPisAIVHFY8zfJKUfpy8Yz5HC6hqmn6L+Eo6hdxoO6q9zQdV/VPGcZ6fPojkoVljdcsYCvqe6lxXLl1MaaptYx8M+d3UOUZRZirtSlOEGnUjjMcrK9/IqNOqUo0cVE/BJ4km+plpNOpBS8G7QeHBNYeevxyN8NxxUqrjOSecJcjOVXKylw8zMV510m/5xtm+mDQzCVzTco0096T6LoZMrmmRkjABghQqghGwi5YMcgAmZZNSZmmRWRAABSAIyRTFMpRQQ0X91Cysbm7qyjGnQozqylLklFNvP2A8Q7a9ahqO0cNOpNunp1Nwnnk6k8Sl/TdX3OuWe3u1NjbRtqGqzdKENyCqQjNxiuCWWsnD6he3GpXla9vJb1xcTdWq/5m8s+YK5i52v2nu4uNfW7zdfNU5KH6cGix1zWLF5s9WvqOZbzUbiWG/Np8HzONz6MZ+CjvWm9pm0Ns6ULirQr0FUi6spUn3kofvJNNLOM8cHvUbO2qJTSc4tZi3NvKPyemlSlnjw5H6s0Rp6Lp7UnJfhqfFri/CiI+qnSp0linBR9jJgjAjIAABAFUxYyYNhFyDXvFAqM0ARWa5AAIBAAUoBQOC28/YnXf8Ar636WAB+ZJE6FBRi+ZGABth9HwfqTZf9mtK/4lL9KAA5MxZQQYsAAQAAYMwkABgAAP/Z" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>

                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>

                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>


                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>


                <div className='bg-white border drop-shadow rounded text-center'>
                    <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='my-2 text-2xl font-bold text-primary'>Oliver</h2>
                    <hr />
                    <p className='font-bold'>Director</p>
                </div>
            </div>
        </>
    );
};

export default Our_Team;