const ProfileTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="profileterm"
      role="tabpanel"
      aria-labelledby="profile-tabterm"
    >
      <div className="same__condition__items text__box__none">
        <h2>Utilisation d'Altesphere</h2>
        <p>
        Les responsabilités de l'utilisateur se réfèrent aux actions, 
        comportements et obligations attendus d'un utilisateur lorsqu'il accède ou utilise un service, 
        un site web ou une application. Elles servent à garantir une utilisation appropriée et sécurisée, 
        à protéger les droits d'autres utilisateurs et de l'entité fournissant le service, 
        et à éviter des activités nuisibles ou illégales. En bref,
         cela signifie que l'utilisateur doit respecter les règles établies et utiliser le service de manière responsable et éthique.
        </p>
      </div>
      <div className="same__condition__items text__box__none">
        <h3>Description du Service</h3>
        <p>
        Altesphere fournit des prévisions météorologiques, 
        des alertes et des informations connexes. 
        Ces services sont fournis tels quels, et
         nous ne garantissons pas leur exactitude ou leur disponibilité continue.
        </p>
      </div>
      <div className="same__condition__items text__box__none">
        <h2>Limitation de Responsabilité </h2>
        <p>
        Les informations fournies par Altesphere sont basées sur des prévisions et des modèles. 
        Elles ne doivent pas être utilisées pour prendre des décisions critiques qui peuvent entraîner des dommages ou des blessures.
         Nous ne sommes pas responsables des décisions prises sur la base des informations fournies sur notre site.
        </p>
      </div>
      <div className="same__condition__items text__box__none">
        <h4>Utilisation des Informations</h4>
        <p>
        Les utilisateurs sont autorisés à utiliser les informations de notre site à des fins personnelles. 
        Toute reproduction, distribution ou utilisation commerciale sans notre autorisation écrite est interdite.
        </p>
      </div>
      <div className="same__condition__items text__box__none">
        <h2>Propriété Intellectuelle</h2>
        <p>
        Tous les contenus, logos, graphiques et
         autres matériels sur ce site sont la propriété de Altesphere 
         et sont protégés par les lois sur les droits d'auteur.
        </p>
      </div>
    </div>
  );
};

export default ProfileTab;
