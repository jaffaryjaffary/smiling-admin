export default function AddNewUserPage(){
    return(
        <div>
           <h1 className="text-2xl font-semibold text-gray-400">Create New user</h1>
           <div className="bg-white p-4 mt-10 shadow-sm">
            <form action="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="">Firstname</label>
                        <input type="text" placeholder="Enter firstname"
                        className="border p-2 outline-0"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Lastname</label>
                        <input type="text" placeholder="Enter lastname"
                        className="border p-2 outline-0"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter email address"
                        className="border p-2 outline-0"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter password"
                        className="border p-2 outline-0"
                        />
                    </div>
                     <div className="flex flex-col">
                        <label htmlFor="">Gender</label>
                        <select name="" id=""  className="border p-2 outline-0">
                            <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                                <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Role</label>
                        <select name="" id=""  className="border p-2 outline-0">
                            <option value="">Select Role</option>
                              <option value="Admin">Admin</option>
                                <option value="Normal">Normal User</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="bg-blue-400 p-2 text-white cursor-pointer hover:bg-blue-500">Create New User</button>
                </div>
               
            </form>
           </div>
        </div>
    )
}