import React from 'react';

const FilterSidebar = () => {
    return (
        <div className="offcanvas offcanvas-start show" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-body">
                <h4 className="font-nokora">Filter By</h4>
                <div className="filters">
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">
                            A - Z
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">
                            Career Path
                        </label>
                    </div>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" />
                    <label className="form-check-label">
                        Skill Path
                    </label>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" />
                    <label className="form-check-label">
                        Level
                    </label>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" />
                    <label className="form-check-label">
                        Newest
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
