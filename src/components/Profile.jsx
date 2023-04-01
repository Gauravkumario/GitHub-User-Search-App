import React from "react";

const Profile = (props) => {
  const {
    message,
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = props.userData;

  const dateStr = created_at;
  const date = new Date(dateStr);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <>
      <div className="github-profile-container shadow-lg rounded-lg px-6 py-8 text-white">
        {message === "Not Found" ? (
          <h2 className="text-center">User Not Found</h2>
        ) : (
          <>
            <div className="parenttt">
              <div className="div111">
                <img
                  src={avatar_url}
                  alt="profile"
                  width="120px"
                  className="rounded-full mr-4"
                />
              </div>
              <div className="div222">
                <div className="name-container flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold">
                      {name === null ? "Not Available" : name}
                    </h2>
                    <h3 className="font-bold text-blue-500 mb-4">
                      <a href={`https://github.com/${login}`} target="_blank">
                        @{login}
                      </a>
                    </h3>
                  </div>
                  <h2 className="sm:text-sm">
                    Joined <time>{formattedDate}</time>
                  </h2>
                </div>{" "}
              </div>
              <div className="div333">
                {bio === null ? (
                  <p className="text-grey-500">Profile has no bio</p>
                ) : (
                  <p>{bio}</p>
                )}{" "}
              </div>
            </div>

            <div className="flex flex-col justify-end items-end">
              <div className="parentt">
                <div className="div11">Repo</div>
                <div className="div22">Followers</div>
                <div className="div33">Following</div>
                <div className="div44">{public_repos}</div>
                <div className="div55">{followers}</div>
                <div className="div66">{following}</div>
              </div>

              <div className="parent">
                <div className="div1 flex justify-start items-center">
                  <ion-icon name="location" />
                  {location === null ? "Not Available" : location}
                </div>
                <div className="div2 flex justify-start items-center">
                  <ion-icon name="logo-twitter" />
                  {twitter_username === null ? (
                    "Not Available"
                  ) : (
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                    >
                      {twitter_username}
                    </a>
                  )}
                </div>
                <div className="div3 flex justify-start items-center">
                  <ion-icon name="link" />
                  {blog === "" ? (
                    "Not Available"
                  ) : (
                    <a href={blog} target="_blank">
                      {blog}
                    </a>
                  )}
                </div>
                <div className="div4 flex justify-start items-center">
                  <ion-icon name="business" />
                  {company === null ? "Not Available" : company}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
