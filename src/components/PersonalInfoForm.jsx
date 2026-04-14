export default function PersonalInfoForm({personalInfo, setPersonalInfo}) {
    function handleChange(e) {
        const {name, value} = e.target;

        setPersonalInfo({
            ...personalInfo,
            [name] : value,
        });
    }

    return (
        <div className="form">
            <h2>Personal Information</h2>

            <input
                type="text"
                name="name"
                placeholder="Enter name.."
                value={personalInfo.name == "John Doe" ? "" : personalInfo.name}
                onChange={handleChange}
                autoComplete="off"
            />
            <input
                type="text"
                name="email"
                placeholder="Enter email.."
                value={personalInfo.email == "johndoe@email.com" ? "" : personalInfo.email}
                onChange={handleChange}
                autoComplete="off"
            />
            <input
                type="text"
                name="city"
                placeholder="Enter City.."
                value={personalInfo.city == "City" ? "" : personalInfo.city}
                onChange={handleChange}
                autoComplete="off"
            />
            <input
                type="text"
                name="country"
                placeholder="Enter Country.."
                value={personalInfo.country == "Country" ? "" : personalInfo.country}
                onChange={handleChange}
                autoComplete="off"
            />
            <input
                type="tel"
                name="tel"
                placeholder="Enter Telephone Number.."
                value={personalInfo.tel == "012 345 6789" ? "" : personalInfo.tel}
                onChange={handleChange}
                autoComplete="off"
            />
        </div>
    )
}